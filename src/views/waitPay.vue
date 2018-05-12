<template>
  <div class="container">
    <div class="">
      <div class="goods-item" @click="show =true">
        <div class="goods-item-head"><img src="http://test.apa7.cc/uploads/////aa5ec502676c0c1ee8fbaa2cb7c72fed.jpg" width="100%">
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
    <div v-transfer-dom>
      <popup v-model="show">
        <group title="收货地址">
          <cell-box>
            北京市朝阳区紫潭大厦606
          </cell-box>
          <cell-box>
            姚小小
          </cell-box>
          <cell is-link title="1369104311" value="修改">
          </cell>
        </group>
        <group>
          <cell title="成交价：" value="¥1000"></cell>
          <cell title="服务费：" value="¥50"></cell>
          <cell title="合计：">
            <div class="text-red">¥1050</div>
          </cell>
        </group>
        <div class="p-sm">
          <x-button type="warn">立即支付</x-button>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {}
}

</script>
<style lang="less" rel="stylesheet/less" scoped>


</style>
