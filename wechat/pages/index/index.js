var util = require('../../utils/util.js');
Page({
  data: {
    url: "",
    title: "弘真艺拍1111",
    canIUse: wx.canIUse('web-view'),
  },
  onLoad: function (options) {
    var _this = this;
    if (!_this.data.canIUse) { //低版本兼容处理
      wx.showModal({
        content: '您的微信客户端版本过低，请升级到最新版本',
        showCancel: false,
        success: function (res) { }
      })
    }
    wx.showLoading()
    
    if (options.return_url && options.return_url != "undefined") {
      var return_url = decodeURIComponent(options.return_url);
      if (/\/{2}/.test(return_url)){
        var arr = return_url.split("//")[1].split("/");
        arr.shift();
        return_url = "/" + arr.join('/')
      }
      _this.data.url = util.parsePath(return_url, wx.getStorageSync('3rd_session'))
    } else {
      _this.data.url = "/index?token=" + wx.getStorageSync('3rd_session');
    }
    
    wx.checkSession({
      success: function (res) {
        //session_key 未过期，并且在本生命周期一直有效
        //加载web-view
        _this.setData({
          url: "https://pai.arthongzhen.com" + _this.data.url
        })
      },
      fail: function (res) {
        // session_key 已经失效，需要重新执行登录流程

        wx.redirectTo({
          url: '../login/login?return_url=' + encodeURIComponent(_this.data.url)
        })
        
      },
      complete: function(){
        wx.hideLoading()
      }
    })
  },

  onShareAppMessage: function (res) { //转发
  console.log(res)
    var webViewUrl = encodeURIComponent(res.webViewUrl);
    
    return {
      title: this.data.title,
      path: '/pages/index/index?return_url=' + webViewUrl,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
    
  }

})



