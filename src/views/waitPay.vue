<template>
  <div>
    <div class="header" style="position: fixed;background: #fff;">
      <x-header :left-options="{backText: ''}">待付款</x-header>
    </div>
    <div class="container" style="padding-bottom: 0">
      <div class="" v-if="hasContent">
        <div class="goods-item" @click="addressInfo(item.address)" v-for='(item,index) in goods' :key='index'>
          <div class="goods-item-head"><img :src="item.pic_url" width="100%">
          </div>
          <div class="goods-item-footer">
            <div class="goods-item-info vux-1px-b">
              <h3 class="text-justify"><span class="text-default">{{item.author}}</span><small class="text-muted f12 fwn">{{item.category}}</small></h3>
              <p>{{item.title}}</p>
            </div>
            <div class="goods-item-price">
              <div class="item vux-1px-r"><span class="text-muted f14">成交价：</span><span class="text-red">¥
          <span>{{item.last_price}}</span></span>
              </div>
              <div class="item"><span class="text-muted f14">起拍价：</span><span class="text-info">¥{{item.start_price}}</span></div>
            </div>
          </div>
        </div>
        <p class="text-muted p-sm text-center" v-show="noMore">没有更多了</p>
      </div>
      <div class="no-content" v-else>
        暂无内容
      </div>
      <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
      </div>
      <div v-transfer-dom>
        <popup v-model="show">
          <group title="收货地址">
            <x-input title="姓名" type="text" placeholder="必填" v-model="address.name"></x-input>
            <x-input title="手机号码" type="tel" placeholder="必填" v-model="address.telephone"></x-input>
            <!--  <x-address title="收货地址" v-model="addressValue" raw-value :list="addressData" value-text-align="right" label-align="justify"></x-address> -->
            <x-input type="tel" placeholder="详细地址（如街道门牌号）" v-model="address.address"></x-input>
          </group>
          <group>
            <cell title="成交价：" value="¥1000"></cell>
            <cell title="服务费：" value="¥50"></cell>
            <cell title="合计：">
              <div class="text-red">¥1050</div>
            </cell>
          </group>
          <div class="p-sm">
            <x-button type="primary">立即支付</x-button>
          </div>
        </popup>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import { XAddress, ChinaAddressV4Data, XInput, Selector, PopupPicker } from 'vux'
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
      address: '',
    }
  },
  created() {
    this.createdDate()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
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
      this.show = true;
      this.address = data
    }
  },
  computed: {

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
