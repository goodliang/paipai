<template>
<div>
  <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
  <divider>zh-CN: 我是有底线的</divider>
  <router-link to="/404">我是404</router-link> 
</div>
</template>


<script>
import { Divider,Loading ,TransferDom} from 'vux'

export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      showMenu: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left'
    }
  },
  computed: {
    isLoading(){
      return this.$store.state.isLoading
    }
  },
  components: {
    Divider,
    Loading,
    TransferDom
  }
}
</script>