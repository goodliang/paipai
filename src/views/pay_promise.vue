<template>
  <div>
  <card :header="{title: '商品信息' }" :footer="{title: '起拍价：0 加价：100' }">
      <p slot="content" class="card-padding">
      	图片
      	<br>标题
      </p>
    </card>  

    <br><br>

      <card :header="{title: '拍卖保证金: ¥200 （正常交易可退）' }" >
      <p slot="content" class="card-padding">
       <input type="checkbox" name="" checked="checked">	微信支付 
      	
      </p>
    </card> 

   <br>
         <x-button type="primary" @click.native="pay"><acronym></acronym>安全支付</x-button>

</div>

</template>


<script>

export default {
	  data() {
	    return {
	      isLoading: true
	  }
	  
    },
    methods : {
	  	pay(){

        this.$http.get('/api/pay/createOrder').then((res)=>{

          console.log(res)


        })

        function onBridgeReady(){
           WeixinJSBridge.invoke(
               'getBrandWCPayRequest', {
                   "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入     
                   "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数     
                   "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串     
                   "package":"prepay_id=u802345jgfjsdfgsdg888",     
                   "signType":"MD5",         //微信签名方式：     
                   "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
               },
               function(res){     
                   if(res.err_msg == "get_brand_wcpay_request:ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
               }
           ) 
      }
      if (typeof WeixinJSBridge == "undefined"){
         if( document.addEventListener ){
             document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
         }else if (document.attachEvent){
             document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
             document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
         }
      }else{
         onBridgeReady();
      }

	  	}
	  }
	  
}

</script>
<style>
  
</style>