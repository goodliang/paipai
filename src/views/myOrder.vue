<template>
  <div class="container">
    <div class="fixed-tab" v-transfer-dom>
      <tab :line-width="1" custom-bar-width="60px">
        <tab-item selected @on-item-click="createdDate">参拍中</tab-item>
        <tab-item @on-item-click="createdDate">已拍下</tab-item>
        <tab-item @on-item-click="createdDate">未拍中</tab-item>
      </tab>
    </div>
    <div class="goods-list">
      <div class="goods-item">
        <div class="goods-item-head"><img src="http://test.apa7.cc/uploads/////aa5ec502676c0c1ee8fbaa2cb7c72fed.jpg" width="100%">
          <span class="goodsStatus red">已出局</span>
        </div>
        <div class="goods-item-footer">
          <div class="goods-item-info vux-1px-b">
            <h3 class="text-justify"><span class="text-default">姚佳</span><small class="text-muted f12 fwn">现代仿品</small></h3>
            <p> 釉里红龙纹梅瓶-仿品</p>
          </div>
          <div class="goods-item-price">
            <div class="item vux-1px-r"><span class="text-muted f14">成交价：</span><span class="text-red">¥
          <span>1000</span></span>
            </div>
            <div class="item"><span class="text-muted f14">起拍价：</span><span class="text-info">¥1000</span></div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-head"><img src="http://test.apa7.cc/uploads/////aa5ec502676c0c1ee8fbaa2cb7c72fed.jpg" width="100%">
          <span class="goodsStatus green">暂领先</span>
        </div>
        <div class="goods-item-footer">
          <div class="goods-item-info vux-1px-b">
            <h3 class="text-justify"><span class="text-default">姚佳</span><small class="text-muted f12 fwn">现代仿品</small></h3>
            <p> 釉里红龙纹梅瓶-仿品</p>
          </div>
          <div class="goods-item-price">
            <div class="item vux-1px-r"><span class="text-muted f14">成交价：</span><span class="text-red">¥
          <span>1000</span></span>
            </div>
            <div class="item"><span class="text-muted f14">起拍价：</span><span class="text-info">¥1000</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { LoadMore, Tab, TabItem } from 'vux'
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
      this.$http.get('/api/getGoodList?status=' + this.stateActive + '&page=' + this.page)
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
      console.log(heightTop)
      // 判断是否滚动到底部  
      if (heightTop + window.innerHeight >= document.body.offsetHeight) {
        // 如果开关打开则加载数据  
        if (this.fetching == true) {
          console.log('2222')
          // 将开关关闭  
          this.fetching = false;
          this.page++
            console.log(this.goods)
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
    }
  },
  computed: {

  },
  components: {
    Tab,
    TabItem,
    LoadMore
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>


</style>
