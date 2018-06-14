<template>
  <div>
    <div class="header" style="position: fixed;background: #fff;">
      <x-header :left-options="{backText: ''}">待付款</x-header>
    </div>
    <div class="container" style="padding-bottom: 0">
      <div class="" v-if="hasContent">
        <div style="display: none">
          <panel></panel>
        </div>
        <div class="goods-list" v-if="hasContent" style="margin-top: 0;">
          <div class="weui-panel weui-panel_access" @click="addressInfo(item)" v-for='(item,index) in goods' :key='index'>
            <div class="weui-panel__bd">
              <div class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd"><img :src="item.pic_url" class="weui-media-box__thumb"></div>
                <div class="weui-media-box__bd">
                  <h4 class="weui-media-box__title f14 text-default">{{item.title}}</h4>
                  <div class="f12 text-red">已拍下,去支付</div>
                  <div class="text-justify f14">
                    <div class="item"><span class="text-muted f12">成交价：</span><span class="text-info"><countup :start-val="item.start_price" :end-val="item.last_price" :duration="1" class="demo1"></countup></span></div>
                    <div class="item"><span class="text-muted f12">起拍价：</span><span class="text-muted">¥{{item.start_price}}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-muted p-sm text-center" v-show="noMore">没有更多了</p>
        </div>
      </div>
      <div class="no-content" v-else>
        暂无内容
      </div>
      <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
      </div>
      <div v-transfer-dom>
        <popup v-model="show">
          <group title="收货地址" v-if="addAddress">
            <cell :title="addressData.name" :inline-desc='addressData.province_name +addressData.city_name
                +addressData.area_name+addressData.address' :value="addressData.telephone" :link="'/addressList?tabAddress='+order_number"></cell>
          </group>
          <group title="暂无收货地址" v-else>
            <cell title="添加收货地址" link='/address'></cell>
          </group>
          <group>
            <cell title="成交价：" :value="'¥'+pay_price"></cell>
            <cell title="服务费：" :value="'¥'+fee"></cell>
            <cell title="合计：">
              <div class="text-red" v-text="sumPrice"></div>
            </cell>
          </group>
          <div class="p-sm">
            <x-button type="primary" @click.native="pay" :disabled="payBtn">立即支付</x-button>
          </div>
        </popup>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import { XAddress, ChinaAddressV4Data, XInput, Selector, PopupPicker } from 'vux'
import 'url-search-params-polyfill';

export default {
  data() {
    return {
      show: false,
      isLoading: true,
      hasContent: false,
      goods: [],
      page: 0,
      fetching: true,
      noMore: false,
      fee: 0,
      pay_price: 0,
      order_number: '',
      addAddress: true,
      payBtn: false
    }
  },
  created() {
    this.getAddress()
    this.createdDate()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getAddress() {
      let that = this
      if (Object.keys(that.$store.state.defaultAddress).length == 0) {
        this.$http.get('/api/address')
          .then(function(res) {
            if (res.data.data.length) {
              that.$store.commit('setAddress', res.data.data[0])
            } else {
              that.addAddress = false
              that.payBtn = true
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    createdDate() {
      this.page = 0;
      this.fetching = true;
      this.noMore = false;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      this.isLoading = true
      this.$http.get('/api/waitingPay?page=' + this.page)
        .then((res) => {
          this.goods = res.data.data
          this.isLoading = false
          if (this.goods.length) {
            this.hasContent = true
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleScroll() {
      let that = this
      let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
      // 判断是否滚动到底部  
      if (heightTop + window.innerHeight >= document.body.offsetHeight) {
        // 如果开关打开则加载数据  
        if (this.fetching == true) {
          // 将开关关闭  
          this.fetching = false;
          this.page++
            this.$http.get('/api/waitingPay?page=' + this.page)
            .then(function(res) {
              if (res.data.data !== null) {
                that.goods = that.goods.concat(res.data.data)
                // 数据更新完毕，将开关打开  
                that.fetching = true;
              } else {
                that.noMore = true
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    },
    addressInfo(data) {
      this.show = true
      this.order_number = data.order_number
      this.fee = data.fee
      this.pay_price = data.pay_price
    },
    pay() {
      let that = this
      const params = new URLSearchParams();
      params.append('order_number', parseInt(this.order_number));
      params.append('address_id', this.addressData.id);
      this.$http.post('/api/address', params)
        .then(function(res) {
          if (res.data.errno == 1000) {
            wx.miniProgram.navigateTo({ url: '/pages/pay/pay?order_number=' + that.order_number + '&return_url=' + encodeURIComponent(location.protocol + '//' + location.host + '/promise_success/' + that.order_number) })
          }
        })
    }
  },
  computed: {
    sumPrice() {
      return this.fee + this.pay_price
    },
    addressData() {
      return this.$store.state.defaultAddress
    }
  },
  components: {
    Selector,
    PopupPicker,
    XAddress,
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>


</style>
