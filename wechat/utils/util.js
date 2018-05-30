function serviceHOST() {
  return "http://test.apa7.cc"  //测试
  // return "https://pai.arthongzhen.com"
}
function httpHost(){
  return "http://localhost:8080"; //本地开发
  // return "https://pai.arthongzhen.com"
}

//login in
function loginIn(callback) {
  wx.login({//登录
    success: function (res) {
      if (res.code) {//发起网络请求
        getRdSession(callback, res.code);
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  });
}

//code 换取_sid 3rd_session
function getRdSession(callback, code) {
  wx.request({
    url: serviceHOST() + '/passport/wxLogin',
    method: "POST",
    data: {
      "code": code
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    dataType: 'json',
    success: function (msg) {
      var data = msg.data.data
      if (data["3rd_session"]) {
        wx.setStorageSync('3rd_session', data['3rd_session']);
        callback && callback(data['3rd_session'])
      }
    },
    fail: function () {
      console.log("login error")
    }
  })
}


module.exports = {
  httpHost: httpHost,
  serviceHOST: serviceHOST,
  loginIn: loginIn

}