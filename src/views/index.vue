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
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5abc9f432a81eb026059a2ac/api/select')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  computed: {

  },
  components: {
    Divider
  }
}

</script>
