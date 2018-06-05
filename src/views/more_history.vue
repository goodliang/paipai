<template>
  <div>
    <x-header :left-options="{backText: ''}">出价记录</x-header>

    
    <div class="price_history weui-panel">
      <ul v-if="historyData.length" v-cloak>
        <li class="userList vux-1px-b" v-for="(user,index) in historyData" :key="user.id">
          <div class="avatar">
            <img width="40" height="40" :src="user.u_head_fmt">
          </div>
          <div class="nickname">
            <p>{{user.u_nick}}</p>
            <p class="price">¥{{user.price}}</p>
          </div>
          <div class="time">
            <p v-if="0 === index"> <img width="40" src="/static/img/first.png"></p>
            <p v-else><img width="40" src="/static/img/out.png"></p>
            <p style="color: #666">{{user.offer_time_fmt}}</p>
          </div>
        </li>
      </ul>
      <p v-else style="padding: 30px;text-align: center;">加载中...</p>
    </div>
    
  </div>
</template>
<script>
import { Divider, Popup, GroupTitle } from 'vux'
import { XNumber } from 'vux'

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
      showPrice: false,
      security_deposit: 0,
      offerPirce: '', //出价金额
      novali: false,
      ispromise: false,
      hasPaypromise: false,
      historyData: [],
      list: [],
      moreBtn: false,
      menus1: {
        menu1: '<span style="color:green">支付保证金</span>'
      }


    }
  },
  beforeCreate() {

      this.$http.get('/api/getGoodOfferList?id=' + this.$route.params.id).then((res) => {
        if (res.data.data){
        this.historyData = JSON.parse(JSON.stringify(res.data.data))
        }

      })

  },
  created() {},
  mounted() {


  },
  methods: {


  }    
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
[v-cloak] {
  display: none;
}

.userList {
  display: flex;
  justify-content: space-between;
  padding: 6px 15px;
  font-size: 12px;
  .price {
    color: #d4282d;
  }
}

.weui-panel {
  background-color: #FFFFFF;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}

.weui-panel__hd {
  padding: 10px 10px 10px 15px;
  color: #666;
  font-size: 14px;
  position: relative;
}

.weui-panel__bd {
  padding: 15px;
  line-height: 1.8;
  font-size: 13px;
  color: #666;
  ul,
  li {
    list-style: none;
  }
}

.bottomLayer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  display: flex;
  border-top: 1px solid #eee;
  z-index: 99;
  .price {
    flex-grow: 1;
    line-height: 1.2;
    padding-left: 10px;
    text-align: center;
    span {
      font-size: 16px;
      padding: 5px 0 0 0;
      display: inline-block;
    }
  }
  .button {
    flex-grow: 2
  }
}

.w50 {
  width: 50%;
  text-align: center;
  margin: 0 auto
}

.avatar {
  flex-grow: 0.5
}

.nickname {
  flex-grow: 2
}

.time {
  flex-grow: 1.5;
  text-align: right;
}

.w40 {
  width: 40%;
  text-align: center;
  margin: 0 auto
}

.goods-item {
  margin: 0px;
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
