<template>
  <div class="main-body">
    <div class="header" style="position: fixed;background: #fff;">
      <x-header :left-options="{backText: ''}">收货地址
        <router-link to="/address" slot="right" class="text-red">新增地址</router-link>
      </x-header>
    </div>
    <div class="container">
      <group>
        <cell :title="item.name" :inline-desc='item.province_name +item.city_name
+item.area_name+item.address' :value="item.telephone
" v-for='(item,index) in address' :key="index"></cell>
      </group>
      <!--       <div style="padding:20px 15px;"><x-button link="">新增地址</x-button></div>  -->
    </div>
    <footer-bar/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      address: [],
    }
  },
  beforeCreate() {
    this.$http.get('/api/address')
      .then((res) => {

        if (res.data.data.length) {
          this.address = res.data.data
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {}
}

</script>
<style lang="less" rel="stylesheet/less">
.address .weui-cells {
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 15px;
}

</style>
