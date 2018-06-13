<template>
  <div class="main-body">
    <!-- <div class="header" style="background: #fff;">
      <x-header :left-options="{backText: ''}">待付款</x-header>
    </div> -->
    <div class="container">
      <div class="text-center p-sm text-info">
        <msg :title="'保证金支付成功'" :description="'保证金可在拍卖结束后申请退款或用于下次竞拍'" :buttons="buttons" :icon="icon"></msg>
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
        text: '返回去出价',
        link: '/detail/'+this.$route.params.id
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
