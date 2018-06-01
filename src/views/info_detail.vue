<template>
  <div class="container">
          <x-header >返回图标  分享图标</x-header>
             <h1>{{title}}</h1>
             <hr>
             <div>
               来源：{{source}}
               日期：{{create_time_fmt}}
             </div>
    <div class="p-sm">
    <card>
     
      <div slot="content" class="p-sm">
        {{content}}
      </div>
    </card>
    </div>

  </div>
</template>
<script>
import { Card } from 'vux'
export default {
  data() {
    return {
      a:{},
      page:0

    }
  },
  beforeCreate() {},
  created() {},
  mounted() {
    this.$http.get('/api/api/getNewsInfo?id='this.$route.params.id)
        .then((res) => {
          this.a = res.data.data
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
