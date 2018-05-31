var util = require('../../utils/util.js');
Page({
  data: {
    url: "",
    title: "弘真艺拍"
  },
  onLoad: function (options) {
    var _this = this;
    console.log('index onLoad',options.return_url)
    if (options.return_url) {
      _this.data.url = decodeURIComponent(options.return_url)
    } else {
      _this.data.url = util.httpHost() + "/index";
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
      path: '/pages/login/login?return_url=' + webViewUrl,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
    
  }

})



