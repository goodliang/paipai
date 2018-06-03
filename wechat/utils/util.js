function serviceHOST() {
  // return "http://test.apa7.cc"  //测试
  return "https://pai.arthongzhen.com"
}
function httpHost(){
  // return "http://localhost:8080/index"; //本地开发
  return "https://pai.arthongzhen.com/index"
}

//login in
function loginIn(callback,userInfo) {
  wx.login({//登录
    success: function (res) {
      if (res.code) {//发起网络请求
        var data = userInfo ? userInfo : {};
        data.code = res.code;
        getRdSession(callback, data);
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  });
}

//code 换取_sid 3rd_session
function getRdSession(callback,data) {
  console.log(data)
  wx.request({
    url: serviceHOST() + '/passport/wxLogin',
    method: "POST",
    data: data,
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

function parsePath(url,token){
  url = decodeURIComponent(url)
  
  var hash = url.split("#")[1];
  var passname = url.split("#")[0];

  if (/(\?|&)token=/.test(url)) {
    var pathArr = passname.split("?");
    var path = pathArr[0];
    var paramsArr = pathArr[1].split("&");
    var params = "";
    for (var i = 0; i < paramsArr.length; i++) {
      if (paramsArr[i].split("=")[0] == "token") {
        paramsArr[i] = "token=" + token;
      }
    }
    params = paramsArr.join("&");
    url = path + "?" + params
  } else if (/\?/.test(url)) {
    url = passname + "&token=" + token
  } else {
    url = passname + "?token=" + token;
  }

  return url + (hash ? "#" + hash : "")
}



module.exports = {
  httpHost: httpHost,
  serviceHOST: serviceHOST,
  loginIn: loginIn,
  parsePath: parsePath
}