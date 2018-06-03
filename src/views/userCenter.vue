<template>
  <div class="main-body">
    <div class="container">
      <blur :blur-amount=40 :url="headPic">
        <div class="head-main">
          <img :src="headPic" class="user-head">
          <p class="user-name">{{nickname}}</p>
        </div>
      </blur>
      <div class="group-area">
        <group>
          <cell is-link link="/myOrder">
            <span slot="title"><span><i class="iconfont icon-paimaijilu"></i>我的拍卖</span></span>
          </cell>
          <cell is-link link="/waitPay">
            <span slot="title"><span><i class="iconfont icon-fukuan"></i>待付款</span></span>
          </cell>
        </group>
        <group>
          <cell is-link link="/addressList">
            <span slot="title"><span><i class="iconfont icon-genggaishouhuodizhi"></i>收货地址</span></span>
          </cell>
          <cell is-link link="/vip">
            <span slot="title"><span><i class="iconfont icon-vip"></i>升级为VIP</span></span>
          </cell>
        </group>
        <group>
          <cell is-link link="/rule">
            <span slot="title"><span><i class="iconfont  icon-bianmaguize"></i>拍卖规则</span></span>
          </cell>
          <cell is-link>
            <span slot="title"><span><i class="iconfont icon-kefu"></i>客服</span></span>
          </cell>
        </group>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import { Blur } from 'vux'
export default {
  data() {
    return {
      headPic: 'static/img/head_pic.jpg',
      nickname:'弘真艺拍'
    }
  },
  beforeCreate() {
     this.$http.get('/api/userinfo')
      .then((res) => {
        if (res.data.data) {
          this.headPic = res.data.data.pic 
          this.nickname = res.data.data.nick
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {},
  computed: {

  },
  components: {
    Blur
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.head-main {
  overflow: hidden;
  text-align: center;
  padding-top: 35px;
}

.user-head {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #fff;
  display: block;
  margin: 0 auto;
}

.user-name {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 2px 10px;
  font-size: 12px;
  display: inline-block;
  color: #fff;
  margin-top: 20px;
}

</style>
