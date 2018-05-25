<template>
  <div>
    <div v-transfer-dom>
      <loading :show="true" text="正在登录..."></loading>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      webUrl: 'http://test.apa7.cc'
    }
  },
  mounted() {

  },
  created() {
    // 检测会员有没有登录
    if (!this.$cookies.get('token')) {
      let ua = window.navigator.userAgent.toLowerCase()
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        // 跳转到微信授权页面
        window.location.href = this.webUrl + '/passport/wxLogin'
      }
    } else {
      // 如果有token 但是vuex中没有用户登录信息则做登录操作
      this.login()
    }
  },
  methods: {
    login() {
      let url = this.webUrl + '/api/userinfo'
      // 通过cookie中保存的token 获取用户信息s
      this.$http.get('/api/userinfo').then(response => {
        response = response.data.data
        if (response) {
          // 保存用户登录状态(Vuex)
          this.$store.commit('userInfo', response);
          setTimeout(() => {
            this.goBeforeLoginUrl() // 页面恢复(进入用户一开始请求的页面)
          }, 2000)
        } else {
          alert('服务器撸猫去惹 :(', 'wrong')
          // if (this.$cookies.get('token')) {
          //   // 跳转到微信授权页面
          //   window.location.href = this.webUrl + '/passport/wxLogin'
          // }
        }
      })
    }
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>


</style>
