<template>
  <div>
    <div style="padding:20px;">
    <button-tab v-model="tabItemActive">
      <button-tab-item @on-item-click="consoleIndex()">热拍中</button-tab-item>
      <button-tab-item @on-item-click="consoleIndex()">预拍</button-tab-item>
      <button-tab-item @on-item-click="consoleIndex()">已拍结</button-tab-item>
    </button-tab>
    </div>
  </div>
</template>
<script>
import { Divider, ButtonTab, ButtonTabItem } from 'vux'

export default {
  data() {
    return {
      tabItemActive: 0
    }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5abc9f432a81eb026059a2ac/api/select')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    consoleIndex() {
      console.log('click', this.tabItemActive)
    }
  },
  computed: {

  },
  components: {
    Divider,
    ButtonTab,
    ButtonTabItem
  }
}

</script>
