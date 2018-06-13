<template>
  <div>
    <div class="header" style="position: fixed;background: #fff;">
      <x-header :left-options="{backText: ''}">我的拍卖</x-header>
      <div class="button-box vux-1px-t">
        <button-tab>
          <button-tab-item selected @on-item-click="createdDate">参拍中</button-tab-item>
          <button-tab-item @on-item-click="createdDate">已拍下</button-tab-item>
          <button-tab-item @on-item-click="createdDate">未拍中</button-tab-item>
        </button-tab>
      </div>
    </div>
    <div class="container" style="padding-top: 96px;">
      <div style="display: none">
        <panel></panel>
      </div>
      <div class="goods-list" v-if="hasContent" style="margin-top: 0;">
        <router-link :to="'/detail/'+item.id" class="weui-panel weui-panel_access" v-for='(item,index) in goods' :key='index'>
          <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd"><img :src="item.pic_url" class="weui-media-box__thumb"></div>
              <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title f14 text-default">{{item.title}}</h4>
                
                <div class="f12">
                <template v-if="stateActive === '0'">
                  <span :class="offer_Color(item.offer_status)" v-html="offer_status(item.offer_status)"></span>
                </template>
                <template v-if="stateActive === '1'">
                  <span :class="pay_Color(item.pay_status)" v-html="pay_status(item.pay_status)"></span>
                </template>
                <template v-if="stateActive === '2'">
                  <span class="text-muted">已拍结</span>
                </template>
                </div>
                <div class="text-justify f14">
                  <div class="item"><span class="text-muted f12" v-if="stateActive === '2'">成交价：</span><span class="text-muted f12" v-else>当前价：</span><span class="text-red">¥{{item.last_price}}</span>
                  </div>
                  <div class="item"><span class="text-muted f12">起拍价：</span><span class="text-info">¥{{item.start_price}}</span></div>
                </div>
              </div>
            </div>
          </div>
          <a class="weui-panel__ft" v-if="stateActive === '0'">
            <div class="weui-cell weui-cell_access weui-cell_link">
              <div class="weui-cell__bd f12 text-muted">
                距结束：
                <clocker :time="item.end_time_fmt" format='%D 天 %H 时 %M 分 %S 秒 '></clocker>
              </div>
            </div>
          </a>
        </router-link>
        <p class="text-muted p-sm text-center" v-show="noMore">没有更多了</p>
      </div>
      <div class="no-content" v-else>
        暂无内容
      </div>
      <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
      </div>
      <footer-bar/>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import { LoadMore, Tab, TabItem, ButtonTab, ButtonTabItem } from 'vux'
import tabBar from '../conponent/tabbar.vue'

export default {
  data() {
    return {
      isLoading: true,
      hasContent: false,
      state: ['0', '1', '2'], //进行中，预拍，已结束
      goods: [],
      stateActive: '',
      page: 0,
      fetching: true,
      noMore: false,
      offerColor: ['text-red', 'text-green'],
      payColor: ['text-red', 'text-green'],
      offerStatus: ['已出局', '暂领先'],
      payStatus: ['未付款', '已付款']
    }
  },
  created() {
    this.createdDate(0)
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    createdDate(index) {
      this.page = 0;
      this.fetching = true;
      this.noMore = false;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      this.isLoading = true
      this.stateActive = this.state[index]
      this.$http.get('/api/myPai?status=' + this.stateActive + '&page=' + this.page)
        .then((res) => {
          this.goods = res.data.data
          this.isLoading = false
          if (this.goods.length) {
            this.hasContent = true
          } else {
            this.hasContent = false
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
            this.$http.get('/api/getGoodList?status=' + this.stateActive + '&page=' + this.page)
            .then(function(res) {
              if (res.data.data.length > 0) {
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
    offer_status(data) {
      return this.offerStatus[data]
    },
    offer_Color(data) {
      return this.offerColor[data]
    },
    pay_status(data) {
      return this.payStatus[data]
    },
    pay_Color(data) {
      return this.payColor[data]
    },
  },
  computed: {

  },
  components: {
    Tab,
    TabItem,
    LoadMore,
    ButtonTab,
    ButtonTabItem
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.no-content {
  margin-top: 100px
}

.button-box {
  padding: 10px 3%;
  margin: 0 auto;
}

</style>
