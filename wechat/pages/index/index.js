var util = require('../../utils/util.js');
Page({
  data: {
    url: "",
    title: "弘真艺拍",
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
    wx.checkSession({
      success: function (res) {
        //session_key 未过期，并且在本生命周期一直有效
        if (options.return_url) {
          _this.data.url = util.parsePath(options.return_url, wx.getStorageSync('3rd_session'))
        } else {
          _this.data.url = util.httpHost() + "?token=" + wx.getStorageSync('3rd_session');
        }
        //加载web-view
        _this.setData({
          url: _this.data.url
        })
      },
      fail: function (res) {
        // session_key 已经失效，需要重新执行登录流程
        wx.showLoading()
        util.loginIn(function (token) {
          if (options.return_url) {
            _this.data.url = util.parsePath(options.return_url, token)
          } else {
            _this.data.url = util.httpHost() + "?token=" + token;
          }
          wx.hideLoading()

          //加载web-view
          _this.setData({
            url: _this.data.url
          })
        });
      }
    })
  },

  onShareAppMessage: function (res) { //转发
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



