var util = require('../../utils/util.js');
var timer = '';
Page({
  data: {
    order_number: '',        //订单号
    token:"",
    tips:"正在支付...",
  },
  onLoad: function (option) {
    var _this = this;
    _this.data.order_number = option.order_number = 201801011212120001;
    _this.data.token = wx.getStorageSync('hz_3rd_session');

    wx.showLoading()

    //去支付
    this.topayMoney();

  },
  topayMoney: function () {
    var _this = this;
    wx.request({//获取支付配置
      url: util.serviceHOST('dev') + '/pay/getWxPayParam',
      method: 'GET',
      data: { 
        order_number: _this.data.order_number,
        "3rd_session": _this.data.token
      },
      success: function (res) {
        var _res = res.data;
        if(_res.code == 0){
          errorAlertMsg('2获取支付信息失败，请搜索“绝味鸭脖”公众号,查看订单详情完成支付！')
          return;
        }
        wx.requestPayment({ //调取小程序支付
          'timeStamp': _res.data.timeStamp.toString(),
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
        errorAlertMsg('1获取支付信息失败，请搜索“绝味鸭脖”公众号,查看订单详情完成支付！')
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
      title: '弘真艺拍',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})


//金额整数转换
function getIntNum(num){
  return parseInt(parseInt(num)/100);
}

//错误提示信息
function errorAlertMsg(msg,callback){
  wx.showModal({
    content: msg,
    showCancel: false,
    confirmColor: '#f00',
    success: function (res) {
      callback && callback()
    }
  })
}

