Page({
  data: {
    url: "",
    canIUse: wx.canIUse('web-view'),
  },
  onLoad: function (options) {
    var _this = this;
    if (!_this.data.canIUse) { //低版本兼容处理
      wx.showModal({
        content: '您的微信客户端版本过低，请升级到最新版本',
        showCancel: false,
        success: function (res) {}
      })
    }
    
    if(options.return_url){
      _this.url = decodeURIComponent(options.return_url);
    }else{
      _this.url = "https://pai.arthongzhen.com";
    }

    //加载web-view
    _this.setData({
      url: _this.url
    })
  
  },

  getViewMsg: function (e) {
    console.log(e)
  },

  onShareAppMessage: function (res) { //转发
    var webViewUrl = encodeURIComponent(res.webViewUrl);
    return {
      title: 'paipai',
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



