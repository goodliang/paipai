<template>
  <div class="address">
    <group>
      <x-input title="姓名" type="text" placeholder="必填" v-model="name"></x-input>
      <x-input title="手机号码" type="tel" placeholder="必填" v-model="phone"></x-input>
      <x-address title="收货地址" v-model="addressValue" raw-value :list="addressData" value-text-align="right" label-align="justify"></x-address>
      <x-input type="tel" placeholder="详细地址（如街道门牌号）" v-model="street"></x-input>
    </group>
    <div class="p-sm"><x-button type="warn">确定</x-button></div>
  </div>
</template>
<script>
import { XAddress, ChinaAddressV4Data, XInput, Selector, PopupPicker } from 'vux'
export default {
  data() {
    return {
      addressData: ChinaAddressV4Data,
      addressValue: ['广东省', '深圳市', '南山区'],
      name: '',
      phone: '',
      street:''
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {
    Selector,
    PopupPicker,
    XAddress,
  }
}

</script>
<style lang="less" rel="stylesheet/less">
.address .weui-cells{
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 15px;
}
</style>
