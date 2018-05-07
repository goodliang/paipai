<template>
  <div id="app">
      <router-view class="router-view"></router-view>
      <footer-bar/>
  </div>
</template>
<script>
export default {
  name: 'app',
  computed: {
   
  },
  components: {
 
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
