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
        onClick: this.updateOrder
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
    updateOrder(){
      var token = window.$cookies.get('token')  || ''
var params = new URLSearchParams();
params.append('order_number', this.$route.params.id);       //你要传给后台的参数值 key/
params.append('status', 1);

      this.$http.post('/pay/updateOrder',params).then((res)=>{
        console.log(res)
        alert(res.data.errno)
        alert(res.data.message)

      })
    }
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
