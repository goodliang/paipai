var util = require('../../utils/util.js');
var timer = '';
Page({
  data: {
    payTime: '--分--秒',//剩余时间
    orderNo: '',        //订单号
    orderTotal: '',     //订单总额
    discounted: '',     //已优惠
    payMoney: '',       //还需支付
    orderType: 1,       //订单类型
  },
  onLoad: function (option) {
    var _this = this;
    _this.data.orderNo = option.orderNo;
    _this.data.orderType = option.orderType;
    wx.showLoading()


/////////////////////////////////////
    this.topayMoney();
///////////////////////////////////


    wx.request({
      url: util.serviceHOST('dev') + '/payment/info', //获取订单信息
      data: { order_no: option.orderNo },
      success: function (res) {
        var _res = res.data;
        var lastTime = getPayTime(_res.data.current_time, _res.data.create_time);
        if(_res.code != 0){
          errorAlertMsg('获取订单详情失败，请搜索“绝味鸭脖”公众号,查看订单详情完成支付！')
          return;
        }
        countdownTime(lastTime, _this);
        _this.setData({
          orderNo: _this.data.orderNo || '',
          orderTotal: getIntNum(_res.data.sum_price) || '0',
          discounted: getIntNum(_res.data.reduce_price) || '0',
          payMoney: getIntNum(_res.data.real_price) || '0',
        })
      },
      fail: function () {
        //获取订单信息失败重新获取或去微信公众号订单详情付款
        errorAlertMsg('获取订单详情失败，请搜索“绝味鸭脖”公众号,查看订单详情完成支付！')
      },
      complete: function(){
        wx.hideLoading()
      }
    })
  },
  onUnload: function () {
    clearInterval(timer);
  },
  topayMoney: function () {
    var _this = this;
    wx.showLoading()
    wx.request({//获取支付配置
      url: util.serviceHOST('dev') + '/payment/jsPay',
      method: 'POST',
      data: { order_no: _this.data.orderNo },
      success: function (res) {
        var _res = res.data;
        if(_res.code != 0){
          errorAlertMsg('获取支付信息失败，请搜索“绝味鸭脖”公众号,查看订单详情完成支付！')
          return;
        }
        wx.requestPayment({ //调取小程序支付
          'timeStamp': _res.data.timeStamp,
          'nonceStr': _res.data.nonceStr,
          'package': _res.data.package,
          'signType': 'MD5',
          'paySign': _res.data.paySign,
          'success': function (res) {
            //支付成功
            console.log(res)
            wx.navigateTo({
              url: '../paysuccess/success?orderType=' + _this.data.orderType
            })

          },
          'fail': function (res) {
            //支付失败


          },
          'complete': function (res) {
            //失败成功都有回调
            console.log(res)

          }
        })
      },
      fail: function(){
        errorAlertMsg('获取支付信息失败，请搜索“绝味鸭脖”公众号,查看订单详情完成支付！')
      },
      complete: function(){
        wx.hideLoading()
      }
    })
  },
  onShareAppMessage: function (res) { //转发
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: '绝味鸭脖',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
        util._tips(_this, '网络异常，请稍后重试', 1200)//提示
      }
    }
  }
})
//获取剩余时间戳
function getPayTime(nowTime, createTime) {
  return 15 * 60 * 1000 - (Date.parse(new Date(nowTime.replace(/-/g, '/'))) - Date.parse(new Date(createTime.replace(/-/g, '/'))));//剩余时间戳
}
//剩余时间倒计时--分--秒
function countdownTime(lastTime, _this) {
  var t = Math.round(Number(lastTime) / 1000) || 0;
  var f = "";
  var m = "";
  if(timer){
    clearInterval(timer);
  }
  timer = setInterval(function () {
    f = parseInt(t / 60);
    m = t % 60;
    String(f).length < 2 ? f = "0" + f : f;
    String(m).length < 2 ? m = "0" + m : m;
    _this.setData({
      payTime: f + '分' + m + '秒'
    })
    if (t <= 0 || !lastTime) {
      clearInterval(timer);
      wx.showModal({
        content: '订单已过期',
        showCancel: false,
        success: function (res) {
          wx.redirectTo({
            url: '../index/index'
          })
        }
      })
    };
    t--;
  }, 1000);
};
//金额整数转换
function getIntNum(num){
  return parseInt(parseInt(num)/100);
}

//错误提示信息
function errorAlertMsg(msg){
  wx.showModal({
    content: msg,
    showCancel: false,
    confirmColor: '#f00',
    success: function (res) {}
  })
}


