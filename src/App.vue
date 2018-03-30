<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
    <input type="text" v-model="isLoading">
  </div>
</template>
<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
    })
  },
  components: {
    Loading
  }
}

</script>
<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

</style>
