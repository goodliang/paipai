<template>
  <div class="container">
    <div class="goods-item">
      <div class="goods-item-head">
        <router-link to="/index" class="backIcion">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
        <img :src="detail.pic_url" width="100%">
        <div class="countDown">
          <span class="countDownTit" v-if="detail.status === 0">距结束：
              <clocker :time="new Date(detail.end_time*1000).toLocaleDateString()" format='%D 天 %H 时 %M 分 %S 秒 '></clocker>
            </span>
          <span class="countDownTit" v-if="detail.status === 1">距开始：
    <clocker :time="new Date(detail.start_time*1000).toLocaleDateString()" format='%D 天 %H 时 %M 分 %S 秒'></clocker>
            </span>
          <span class="countDownTit" v-if="detail.status === 2 ">已拍结</span>
        </div>
        <!--  <div class="countDown">
          <span class="countDownTit">距结束：</span>
          <clocker :time="detail.end_time"></clocker>
        </div> -->
      </div>
      <div class="goods-item-footer">
        <div class="goods-item-info vux-1px-b">
          <h3 class="text-justify"><span>{{detail.author}}</span><small class="text-muted f12 fwn">{{detail.type}}</small></h3>
          <p>{{detail.title}}</p>
        </div>
        <div class="goods-item-price">
          <div class="item vux-1px-r"><span class="text-info">¥{{detail.incr_price}}</span>
            <br><span class="text-muted f13">加价</span></div>
          <div class="item vux-1px-r"><span class="text-red">¥
           <countup :end-val="detail.last_price" :duration="0.5" ></countup>
          </span>
            <br><span class="text-muted f13">当前价</span>
          </div>
          <div class="item"><span class="text-info">¥{{detail.start_price}}</span>
            <br><span class="text-muted f13">起拍价</span></div>
        </div>
      </div>
    </div>
    <div class="goods-detail">
      <div class="goods-detail-content" v-html="detail.description">
      </div>
    </div>
    <div class="w50">      
      <x-button type="primary" @click.native="show">出 价</x-button>
    </div>
        <div class="price_history">
  <divider>出价记录</divider>
          <ul>
            <li>11111</li>
          </ul>
        </div>




  <!--   <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div> -->
<!--出价弹窗-->
     <popup v-model="showPrice" height="30%">
        <div class="popup1">
          <p>领先价:999</p>
          <p><input id="input-price" v-model="offerPirce"  autofocus="autofocus" type="number" name=""></p>
          <div class="w50">      
      <x-button type="primary" @click.native="offer">出 价</x-button>
    </div>
        </div>
      </popup>

    <toast v-model="novali" type="warn" text="请填写出价金额"></toast>

     <actionsheet @on-click-menu="menuClick" v-model="nopromise" :menus="menus1"  show-cancel>
      <p slot="header" v-html="'<small style=\'padding:10px\'>保证金将扣除并赔付给卖家保证金将扣除并赔付给卖家</small>'"></p>
    </actionsheet>



  </div>
</template>
<<<<<<< HEAD
<script>
import { Divider } from 'vux'
import { Popup } from 'vux'
=======
<script> 
>>>>>>> 40978c215125ffd3f97ca8bb66dd982b1899df3b

export default {
  data() {
    return {
      isLoading: true,
      detail: {
        last_price: 0
      },
      id: '',
      doStart: false,
      startPrice: 0,
      incr_price: 0,
      showPrice:false,
      offerPirce:'',//出价金额
      novali:false,
      nopromise:true,
       menus1: {
        menu1: '<span style="color:green">支付保证金</span>'
      }


    }
  },
  beforeCreate() {

    this.isLoading = true
    this.$http.get('/api/getgoodInfo?id=' + this.$route.params.id)
      .then((res) => {
        this.detail = res.data.data;
        document.title = this.detail.title
        this.isLoading = false
      })
      .catch((err) => {
        console.log(err)
      })

  },
  created() {},
  mounted() {

  },
  methods: {

    menuClick(key){
      if('menu1' == key){
        this.$router.push('/pay_promise/'+this.$route.params.id)
      }
    },

    //出价动作
    offer(){
      if(this.offerPirce.length<1)
      {
       this.novali = true
       return

      }
      this.showPrice = false
      //提交出价接口
      //
      //    this.$http.get('/api/price_history').then((res)=>{

      //       //重刷出价记录
      //       if(res.data.errorno == 0){
      //         this.priceHistory()
      //       }
      //       

      // })
      


    },

    show(){
      this.showPrice = true
    },

    gavePrice(){

    },

    priceHistory(){
      this.$http.get('/api/price_history').then((res)=>{

        this.historyData= res.data

      })
    },

  },
  computed: {
    isNum() {
      return parseInt(this.detail.incr_price);
    }
  },
 components: {
    Divider,
    Popup
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.w50{
  width: 50%;
  text-align: center;
  margin: 0 auto
}
.goods-item {
  margin:0px;
}

.goods-item-price .item {
  flex: 1;
  text-align: center;
  line-height: 1.4;
}

.goods-detail {
  margin-top: 10px;
  background: #fff;
  color: #333;
  font-size: 14px;
  line-height: 1.8;
  overflow: hidden;
  .goods-detail-content {
    margin: 10px;
  }
}

.backIcion {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 9;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  .vux-x-icon {
    fill: #fff;
  }
}

</style>
