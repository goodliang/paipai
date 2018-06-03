<template>
  <div class="main-body">
    <div class="container">
      <div class="p-sm">
        <router-link v-for="(item,index) in list" :key="index" :to="'/infoView/'+item.id" class="infoCard">
          <card>
            <div slot="header" style="max-height: 200px;overflow: hidden;">
              <img :src="item.pic_url" style="width:100%;display:block;">
            </div>
            <div slot="content" class="p-sm">
              <p class="f12 text-muted "><span>来源：{{item.source}}</span> / <span>{{item.create_time_fmt}}</span></p>
              <p class="text-default text-hide" style="padding-bottom: 4px;">{{item.title}}</p>
              <p class="f12 text-info">{{item.content_fmt}}...</p>
            </div>
          </card>
        </router-link>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
import { Card } from 'vux'
export default {
  data() {
    return {
      list: [],
      page: 0
    }
  },
  beforeCreate() {},
  created() {
    this.creatInfo()
  },
  mounted() {
  
  },
  methods: {
    creatInfo() {
      this.$http.get('/api/getNewsList' + '?page=' + this.page)
        .then((res) => {
          this.list = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {},
  components: {
    Card
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.infoCard{
  display: block;
  margin-bottom: 10px;
}
</style>
