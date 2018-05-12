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

	  	}
	  }
	  
}

</script>
<style>
  
</style>