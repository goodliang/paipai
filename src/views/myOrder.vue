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
export default {
  data() {
    return {

    }
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {
    createdDate(index) {}
  },
  computed: {},
  components: {
    Tab,
    TabItem,
    LoadMore
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>


</style>
