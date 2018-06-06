var util = require('../../utils/util.js');
Page({
  data: {
    title: "弘真艺拍",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    return_url:"",
    loadingtip:"登录",
    loadFlag:false,
  },
  onLoad: function (options) {
    var _this = this;
    _this.data.return_url = decodeURIComponent(options.return_url);

    if (_this.data.return_url == "undefined" || !_this.data.return_url) {
      _this.data.return_url = "https://pai.arthongzhen.com/index"
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          _this.data.loadingtip = "正在登录..."
          _this.data.loadingFlag = true;
          _this.setData({
            loadingtip: _this.data.loadingtip
          })
          wx.getUserInfo({
            success: res => {
              loginInTo(_this, res.userInfo)
            }
          })
        }
      }
    })

    if (!_this.data.canIUse) { //低版本兼容处理
      wx.showModal({
        content: '您的微信客户端版本过低，请升级到最新版本',
        showCancel: false,
        success: function (res) {}
      })
    }

 
  },
  getUserInfo: function (e) {
    if(this.data.loadingFlag){
      return;
    }
    loginInTo(this, e.detail.userInfo)
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

function loginInTo(_this,userInfo){
  var _userInfo;
  if(userInfo){
    _userInfo = {
      avatarUrl: userInfo.avatarUrl,
      city: userInfo.city,
      country: userInfo.country,
      gender: userInfo.gender,
      nickName: userInfo.nickName,
      province: userInfo.province,
    }
  }

  util.loginIn(function () {
    wx.reLaunch({
      url: '../index/index?return_url=' + encodeURIComponent(_this.data.return_url)
    })
  },_userInfo);
}
