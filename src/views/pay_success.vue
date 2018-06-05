<template>
  <div class="main-body">
    <!-- <div class="header" style="background: #fff;">
      <x-header :left-options="{backText: ''}">待付款</x-header>
    </div> -->
    <div class="container">
      <div class="text-center p-sm text-info">
        <msg :title="'支付成功'" :description="'我们将很快为你发货，请耐心等待'" :buttons="buttons" :icon="icon"></msg>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import { Msg, XButton } from 'vux'

export default {
  data() {
    return {
      icon: 'success',
      buttons: [{
        type: 'primary',
        text: '返回个人中心',
        link: '/userCenter'
      }]
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {
    
  },
  computed: {},
  components: {
    Msg,
    XButton
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>


</style>
