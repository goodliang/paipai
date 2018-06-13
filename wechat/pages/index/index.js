var util = require('../../utils/util.js');
Page({
  data: {
    url: "",
    title: "弘真艺拍",
    canIUse: wx.canIUse('web-view'),
    shareUrl:"",
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
    wx.showLoading({
      title: '加载中',
    })

    var rd_session = wx.getStorageSync('3rd_session')
    
    if (options.return_url && options.return_url != "undefined") {
      var return_url = decodeURIComponent(options.return_url);
      if (/\/{2}/.test(return_url)){
        var arr = return_url.split("//")[1].split("/");
        arr.shift();
        return_url = "/" + arr.join('/')
      }
      _this.data.url = util.parsePath(return_url, rd_session)
    } else {
      _this.data.url = "/index?token=" + rd_session;
    }

    if(rd_session){
      _this.setData({
        url: "https://pai.arthongzhen.com" + _this.data.url
        // url: "http://10.11.23.178:8080" + _this.data.url
      })
    }else{
      wx.redirectTo({
        url: '../login/login?return_url=' + encodeURIComponent(_this.data.url)
      })
    }
    
    wx.checkSession({
      success: function (res) {
        //session_key 未过期，并且在本生命周期一直有效
        //加载web-view
        // _this.setData({
        //   url: "https://pai.arthongzhen.com" + _this.data.url
        // })
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
  bindmsg: function(e){
    var data = e.detail.data;
    console.log('bindmsg',e.detail.data)
    this.data.shareUrl = e.detail.data[data.length - 1].shareUrl;
    console.log(this.data.shareUrl)
  },

  onShareAppMessage: function (res) { //转发
    var webViewUrl = this.data.shareUrl ? this.data.shareUrl : res.webViewUrl
    console.log('onShareAppMessage',this.data.shareUrl)

    
    return {
      title: "  ",
      path: '/pages/index/index?return_url=' + encodeURIComponent(webViewUrl),
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
    
  }

})



