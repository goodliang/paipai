<template>
  <div>
    <div class="fixed-tab" v-transfer-dom>
      <tab :line-width="1" custom-bar-width="60px">
        <tab-item selected @on-item-click="createdDate">热拍中</tab-item>
        <tab-item @on-item-click="createdDate">预拍</tab-item>
        <tab-item @on-item-click="createdDate">已拍结</tab-item>
      </tab>
    </div>
    <div class="goods-list" v-if="hasContent">
      <router-link :to="'/detail/'+item.id" class="goods-item" v-for='(item,index) in goods' :key='index'>
        <div class="goods-item-head">
          <img :src="item.pic_url" width="100%">
          <div class="countDown">
            <span class="countDownTit" v-if="stateActive === '0'">距结束：
              <clocker :time="new Date(item.end_time*1000).toLocaleDateString()" format='%D 天 %H 时 %M 分 %S 秒 '></clocker>
            </span>
            <span class="countDownTit" v-if="stateActive === '1'">距开始：
    <clocker :time="new Date(item.start_time*1000).toLocaleDateString()" format='%D 天 %H 时 %M 分 %S 秒'></clocker>
            </span>
            <span class="countDownTit" v-if="stateActive === '2'">已拍结</span>
          </div>
        </div>
        <div class="goods-item-footer">
          <div class="goods-item-info vux-1px-b">
            <h3 class="text-justify"><span class="text-default">{{item.author}}</span><small class="text-muted f12 fwn">{{item.type}}</small></h3>
            <p>{{item.title}}</p>
          </div>
          <div class="goods-item-price">
            <div class="item vux-1px-r"><span class="text-muted f14" v-if="stateActive === '2'">成交价：</span><span class="text-muted f14" v-else>当前价：</span><span class="text-red">¥
            <countup :start-val="item.start_price" :end-val="item.last_price" :duration="1" class="demo1"></countup></span>
            </div>
            <div class="item"><span class="text-muted f14">起拍价：</span><span class="text-info">¥{{item.start_price}}</span></div>
          </div>
        </div>
      </router-link>
      <p class="text-muted p-sm text-center" v-show="noMore">没有更多了</p>
    </div>
    <div class="no-content" v-else>
      暂无内容
    </div>
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
  </div>
</template>
<script>
import { LoadMore, Tab, TabItem } from 'vux'

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
.goods-list {
  margin-top: 54px;
}

.no-content {
  margin-top: 100px
}

</style>
