<template>
  <div class="main-body">
    <div class="header" style="position: fixed;background: #fff;">
      <x-header :left-options="{backText: ''}">收货地址<a @click="postAddress" slot="right" class="text-red">保存</a></x-header>
    </div>
    <div class="container">
      <group>
        <x-input title="姓名" type="text" placeholder="必填" v-model="name" :required="true" is-type="china-name"></x-input>
        <x-input title="手机号码" type="tel" placeholder="必填" v-model="telephone" :required="true" is-type="china-mobile"></x-input>
        <x-address title="收货地址" v-model="addressValue" :raw-value=false :list="addressData" value-text-align="right" label-align="justify" placeholder="请选择城市" disabled=true></x-address>
        <x-input type="tel" placeholder="详细地址（如街道门牌号）" v-model="address" :required="true"></x-input>
      </group>
     <!--  <div class="p-md">
        <x-button type="warn" @click.native="postAddress">确定</x-button>
      </div> -->
      <toast v-model="toastValue" type="text" :time="800" is-show-mask :text="msg"></toast>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import { XAddress, ChinaAddressV4Data, XInput, Selector, PopupPicker } from 'vux'
export default {
  data() {
    return {
      addressData: ChinaAddressV4Data,
      name: '',
      telephone: '',
      addressValue: [],
      address: '',
      toastValue: false,
      msg: '',
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {
    postAddress() {
      let that = this
      const params = new URLSearchParams();
      params.append('name', this.name);
      params.append('telephone', this.telephone);
      params.append('address', this.address);
      params.append('province_id', this.addressValue[0]);
      params.append('city_id', this.addressValue[1]);
      params.append('area_id', this.addressValue[2]);
      this.$http.post('/api/address', params)
        .then((res) => {
          this.toastValue = true;
          this.msg = res.data.message
          if(res.data.errno == 1000){
            setTimeout(function(){
              that.$router.go(-1)
            },1000);
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {},
  components: {
    Selector,
    PopupPicker,
    XAddress,
  }
}

</script>
<style lang="less" rel="stylesheet/less">
.address .weui-cells {
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 15px;
}

</style>
