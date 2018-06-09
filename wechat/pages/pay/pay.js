var util = require('../../utils/util.js');
Page({
  data: {
    order_number: '',        //订单号
    token:"",
    tips:"正在支付...",
    return_url:"",
    error_url:""
  },
  onLoad: function (option) {
    console.log(option)
    var _this = this;
    _this.data.return_url = option.return_url;//支付成功回调路径
    _this.data.error_url = option.error_url;//支付失败返回路径
    _this.data.order_number = option.order_number;
    // _this.data.order_number = 201805290736421553;
    _this.data.token = wx.getStorageSync('3rd_session');

    wx.showLoading({
      title: '加载中',
    })

    //去支付
    _this.topayMoney();

  },
  topayMoney: function () {
    var _this = this;
    wx.request({//获取支付配置
      url: util.serviceHOST() + '/pay/getWxPayParam',
      method: 'GET',
      data: { 
        order_number: _this.data.order_number,
        "3rd_session": _this.data.token
      },
      success: function (res) {
        var _res = res.data;
        if(!_res.data){
          errorAlertMsg('获取支付信息失败，请返回重试', function () {
            _this.setData({
              tips: "获取支付信息失败，请返回重试"
            })
            errorPay(_this.data.error_url)
          })
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
            _this.data.tips = "支付成功"
            console.log(_this.data.return_url)
            _this.setData({
              tips: "支付成功"
            })
            wx.reLaunch({
              url: '../index/index?return_url=' + decodeURIComponent(_this.data.return_url)
            })

          },
          'fail': function (res) {
            console.log(res)
            //支付失败
            errorAlertMsg('支付失败，请返回重试', function () { 
              _this.setData({
                tips: "支付失败，请返回重试"
              })
              errorPay(_this.data.error_url) 
            })

          },
          complete: function(res){
            console.log(res)
          }
        })
      },
      fail: function(){
        errorAlertMsg('获取支付信息失败，请返回重试', function () {
          _this.setData({
            tips: "获取支付信息失败，请返回重试"
          })
          errorPay(_this.data.error_url)
        })
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
      title: '  ',
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

//错误提示信息
function errorAlertMsg(msg,callback){
  wx.showModal({
    content: msg,
    showCancel: false,
    success: function (res) {
      callback && callback()
    }
  })
}

//失败回调
function errorPay(error_url){
  if (error_url) {
    wx.reLaunch({
      url: '../index/index?return_url=' + decodeURIComponent(error_url)
    })
  }
}


