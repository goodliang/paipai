<template>
<div>
   <div class="text-center p-sm text-info">
         
  <msg :title="'支付成功'" :description="'保证金支付成功！您可以出价了'" :buttons="buttons" :icon="icon"></msg>

   </div>
</div>
</template>
<script>
import { Msg ,XButton} from 'vux'

export default {
  data() {
    return {
      icon: 'success',
      buttons: [{
        type: 'primary',
        text: '继续出价',
        onClick: null
      }, {
        type: 'default',
        text: '返回商品',
        link: '/demo'
      }]
    }
  },
  beforeCreate() {
  },
  created() {},
  mounted() {
  },
  methods: {
  },
  computed: {
  },
  components: {
    Msg,
    XButton
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>

</style>
