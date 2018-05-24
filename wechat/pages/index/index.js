Page({
  data: {
    url: "",
    canIUse: wx.canIUse('web-view'),
    title: "微艺拍"
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
      _this.data.url = decodeURIComponent(options.return_url);
    }else{
      _this.data.url = "https://pai.arthongzhen.com";
    }

    //加载web-view
    _this.setData({
      url: _this.data.url
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



