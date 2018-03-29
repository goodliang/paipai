<template>
  <div>
    <divider>zh-CN: 我是有底线的</divider>
    <router-link to="/404">我是404</router-link>
  </div>
</template>
<script>
import { Divider } from 'vux'

export default {
  data() {
    return {
      showMenu: false
    }
  },
  computed: {

  },
  components: {
    Divider
  }
}

</script>
