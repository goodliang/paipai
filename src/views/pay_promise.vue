<template>
  <div>
      <card :header="{title: '支付保证金 (保证金可在拍卖结束后申请退款或用于下次竞拍)' }" >
      <p slot="content" class="card-padding" style="padding: 20px">

         金额：<span style="color: #f00">¥{{money}}.00</span>

        

      </p>
    </card> 

   <br>

   <div class="vux-check-icon" style="padding: 0 10px">

          <i class="weui-icon weui_icon_success weui-icon-success" style=""></i> <i class="weui-icon weui_icon_success_circle weui-icon-success-circle" style="display: none;"></i>  <span> 微信支付 </span></div>

          <br>
          <br>

   <div style="width: 80%; margin: 0 auto">
     <x-button type="primary" @click.native="pay"><acronym></acronym>安全支付</x-button>
   </div>
        
         
</div>

</template>


<script>

export default {
	  data() {
	    return {
	      isLoading: true,
        money:0
	  }
	  
    },
    methods : {
	  	pay(){


var params = new URLSearchParams();
params.append('type', 1);       //你要传给后台的参数值 key/value
params.append('good_id', this.good_id);
var token = this.$route.query.token || window.$cookies.get('token') 

        this.$http.post('/pay/createOrder?3rd_session='+token,params).then((res)=>{

          if(res.data.errno ==1000){

             var order_number = res.data.data.order_number
             //跳转到小程序支付
             //.....
             //
             wx.miniProgram.navigateTo({url: '/pages/pay/pay?order_number='+order_number+'&return_url='+encodeURIComponent(location.protocol +'//'+location.host +'/detail/146')})

          }




        })


	  	}
	  },
    mounted(){
      document.title = "支付保证金"
      this.money = this.$route.params.money
      this.good_id = this.$route.params.good_id


    }
	  
}

</script>
<style>
  
</style>