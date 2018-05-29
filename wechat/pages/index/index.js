var util = require('../../utils/util.js');
Page({
  data: {
    url: "",
    canIUse: wx.canIUse('web-view'),
    title: "弘真艺拍"
  },
  onLoad: function (options) {
    var _this = this;
    wx.showLoading()

    if (!_this.data.canIUse) { //低版本兼容处理
      wx.showModal({
        content: '您的微信客户端版本过低，请升级到最新版本',
        showCancel: false,
        success: function (res) {}
      })
    }

    util.loginIn(function(token){
      if (options.return_url) {
        _this.data.url = decodeURIComponent(options.return_url);
        var hash = _this.data.url.split("#")[1];
        var passname = _this.data.url.split("#")[0];

        if (/(\?|&)token=/.test(_this.data.url)){
          var pathArr = passname.split("?");
          var path = pathArr[0];
          var paramsArr = pathArr[1].split("&");
          for(var i= 0; i<paramsArr.length; i++){
            if(paramsArr[i].split("=")[0] == "token"){
              paramsArr[i] = "token=" + token;
            }
          }
          params = paramsArr.join("&");
          _this.data.url = path + "?" + params
        } else if (/\?/.test(_this.data.url)){
          _this.data.url = passname + "&token=" + token
        }else{
          _this.data.url = passname + "?token=" + token;
        }

        _this.data.url = _this.data.url + (hash ? "#" + hash : "")
        
      } else {
        _this.data.url = util.httpHost() + "/index?token=" + token;
      }
      wx.hideLoading()

      //加载web-view
      _this.setData({
        url: _this.data.url
      })
    });
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



