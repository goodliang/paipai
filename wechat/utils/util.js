const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function serviceHOST(dev){
  return dev ? "http://test.apa7.cc" : "https://pai.arthongzhen.com"
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
    url: serviceHOST("dev") + '/passport/wxLogin',
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
        wx.setStorageSync('hz_3rd_session', data['3rd_session']);
        callback && callback(data['3rd_session'])
      }
    },
    fail: function () {
      console.log('login error')
    }
  })
}


module.exports = {
  formatTime: formatTime,
  serviceHOST: serviceHOST,
  loginIn: loginIn

}