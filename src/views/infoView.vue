<template>
  <div class="main-body">
    <div class="header" style="position: fixed;background: #fff;">
      <x-header :left-options="{backText: ''}">艺讯</x-header>
    </div>
    <div class="container">
      <div class="p-sm text-center" style="margin-top: 10px;">
        <h2>{{title}}</h2>
        <p class="text-muted f12">来源：{{source}} &nbsp;&nbsp;&nbsp;&nbsp; 时间：{{time}}</p>
      </div>
      <div class="infoMain" v-html="content">
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
      title: '',
      content: '',
      time: '',
      source: ''
    }
  },
  beforeCreate() {},
  created() {
    this.creatInfo()
  },
  mounted() {},
  methods: {
    creatInfo() {
      this.$http.get('/api/getNewsInfo?id=' + this.$route.params.id)
        .then((res) => {
          this.title = res.data.data.title
          this.content = res.data.data.content
          this.time = res.data.data.create_time_fmt
          this.source = res.data.data.source
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
.infoMain {
  padding: 10px;
  line-height: 1.8;
  color: #666;
  font-size: 14px;
}

</style>
