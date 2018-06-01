<template>
  <div class="container">
          <x-header >艺讯</x-header>
    
    <div class="p-sm" v-for="(item,index) in list" :key="item.id">
    <card>
      <a :href="'/infoView/'+item.id">
      <img slot="header" :src="item.pic_url" style="width:100%;display:block;">
      <div slot="content" class="p-sm">
        <p class="text-info">{{item.title}} <small>{{item.create_time_fmt}}</small></p>
        <p class="f12 text-default">{{item.content_fmt}}...</p>
      </div>
      </a>
    </card>
    </div>
        <footer-bar/>

  </div>
</template>
<script>
import { Card } from 'vux'
export default {
  data() {
    return {
      list:[],
      page:0

    }
  },
  beforeCreate() {},
  created() {},
  mounted() {
     this.$http.get('/api/api/getNewsList' + '?page=' + this.page)
        .then((res) => {
          this.list = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
  },
  methods: {},
  computed: {},
  components: {
    Card
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>


</style>
