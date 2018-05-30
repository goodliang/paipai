var util = require('../../utils/util.js');
var timer = '';
Page({
  data: {
    order_number: '',        //订单号
    token:"",
    tips:"正在支付...",
    return_url:"",
  },
  onLoad: function (option) {
    var _this = this;
    _this.data.return_url = option.return_url;
    _this.data.order_number = option.order_number;
    // _this.data.order_number = 201801011212120001;
    _this.data.token = wx.getStorageSync('3rd_session');

    wx.showLoading()

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
        wx.requestPayment({ //调取小程序支付
          'timeStamp': _res.data.timeStamp.toString(),
          'nonceStr': _res.data.nonceStr,
          'package': _res.data.package,
          'signType': 'MD5',
          'paySign': _res.data.paySign,
          'success': function (res) {
            //支付成功
            _this.data.tips = "支付成功"
            wx.navigateTo({
              url: '../index/index?return_url=' + encodeURIComponent(_this.data.return_url)
            })

          },
          'fail': function (res) {
            //支付失败
            errorAlertMsg('支付失败，请返回重试', function () {
              wx.navigateTo({
                url: '../index/index?return_url=' + encodeURIComponent(_this.data.return_url)
              })
            })

          }
        })
      },
      fail: function(){
        errorAlertMsg('获取支付信息失败，请返回重试', function () {
          wx.navigateTo({
            url: '../index/index?return_url=' + encodeURIComponent(_this.data.return_url)
          })
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


