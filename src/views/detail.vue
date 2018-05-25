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
          <div class="w40">      
      <x-button type="primary" @click.native="show">出 价</x-button>
    </div>
    <br>
    </div>

        <div class="price_history">
  <divider>出价记录</divider>
         
        <ul  v-if="historyData.length" v-cloak>
            <li class="userList" v-for="(user,index) in historyData" :key="user.id">
              <div class="avatar">
              <img width="40" height="40" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3511298686,563448208&fm=173&app=25&f=JPEG?w=218&h=146&s=F008BE560E735A94623575770300E06C">
              </div>
              <div class="nickname">
                <p>{{user.u_nick}}</p>
                 <p>¥{{user.price}}</p>
              </div>
               <div class="time">
                <p v-if="0 === index">领先</p>
                <p v-else>出局</p>
                 <p>{{user.offer_time_fmt}}</p>
              </div>

            </li>
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

     <actionsheet @on-click-menu="menuClick" v-model="ispromise" :menus="menus1"  show-cancel>
      <p slot="header" > 保证金{{promisePirce}}元<br/>将扣除并赔付给卖家保证金将扣除并赔付给卖家</p>
    </actionsheet>



  </div>
</template>
<script>
import { Divider } from 'vux'
import { Popup } from 'vux'

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
      promisePirce:200,
      offerPirce:'',//出价金额
      novali:false,
      ispromise:false,
      hasPaypromise:false,
      historyData:[],
      list:[],
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

        // this.hasPaypromise = true
      })
      .catch((err) => {
        console.log(err)
      })

  },
  created() {},
  mounted() {

    this.priceHistory()

          setTimeout(()=>{
        this.list = [{id: 6, uid: 1, offer_time: 1526195610, price: 29000, u_nick: "红叶.舞秋山", u_head_fmt: "0"},{id: 6, uid: 1, offer_time: 1526195610, price: 29000, u_nick: "红叶.舞秋山", u_head_fmt: "0"}]

        console.log(this.list)
      },3000)

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

var params = new URLSearchParams();
params.append('id', this.$route.params.id);       //你要传给后台的参数值 key/value
params.append('price', this.offerPirce);
      
     this.$http.post('/api/setGoodOffer',params).then((res)=>{

            //重刷出价记录
            if(res.data.errorno == 0){
              this.priceHistory()
            }
            

      })
      


    },

    show(){
      //判断是否出价
      if(!this.hasPaypromise){
        this.ispromise = true
      }else{
        this.showPrice = true
      }
    },

    gavePrice(){

    },

    priceHistory(){
      this.$http.get('/api/getGoodOfferList?id='+this.$route.params.id).then((res)=>{


        this.historyData = JSON.parse(JSON.stringify(res.data.data))
        console.log('出价列表', res.data)
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
[v-cloak]{
  display: none;
}
.userList{
  display:flex;justify-content:space-between;
  padding: 10px 15px;
  border-bottom:1px solid #ddd;
  font-size: 12px

}
.w50{
  width: 50%;
  text-align: center;
  margin: 0 auto
}
.avatar{
  flex-grow:0.5
}
.nickname{
  flex-grow:2
}
.time{
  flex-grow:1.5
}
.w40{
  width: 40%;
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
