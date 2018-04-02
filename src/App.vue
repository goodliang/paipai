<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
      <router-view class="router-view"></router-view>
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
@import '~vux/src/styles/1px.less';
body {
  background-color: #fbf9fe;
}

</style>
