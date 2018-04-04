<template>
  <div>
    <div class="goods-item">
      <div class="goods-item-head">
        <img :src="detail.img" width="100%">
        <!-- <div class="countDown">
          <span class="countDownTit">距结束：</span>
          <clocker :time="detail.endTime"></clocker>
        </div> -->
      </div>
      <div class="goods-item-footer">
        <div class="goods-item-info vux-1px-b">
          <h3 class="text-justify"><span>{{detail.author}}</span><small class="text-muted f12 fwn">{{detail.type}}</small></h3>
          <p>{{detail.title}}</p>
        </div>
        <div class="goods-item-price">
          <div class="item vux-1px-r"><span class="text-info">¥{{detail.addPrice}}</span>
            <br><span class="text-muted f13">加价</span></div>
          <div class="item vux-1px-r"><span class="text-red">¥
            <countup :end-val="startPrice" :duration="2" ></countup></span>
            <br><span class="text-muted f13">起拍价</span>
          </div>
          <div class="item"><span class="text-info">¥{{detail.reference}}</span>
            <br><span class="text-muted f13">参考价</span></div>
        </div>
      </div>
    </div>
    <div class="goods-detail">
      <div class="goods-detail-content" v-html="detail.detail">
      </div>
    </div>
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
      detail: '',
      id: '',
      doStart: false,
      startPrice:0
    }
  },
  created() {
    this.createdDate()
  },
  mounted() {

  },
  methods: {
    createdDate() {
      this.isLoading = true
      this.$http.get('https://www.easy-mock.com/mock/5abc9f432a81eb026059a2ac/api/view/' + this.$route.params.id)
        .then((res) => {
          this.detail = res.data.data,
          document.title = this.detail.title
          this.startPrice = this.detail.startPrice
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    isNum() {
      return parseInt(this.detail.startPrice);
    }
  },
  components: {

  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.goods-list {
  margin-top: 44px;
}

.goods-item {
  .goods-item-head {
    position: relative;
    overflow: hidden;
    .countDown {
      position: absolute;
      left: 8px;
      top: 8px;
    }
    .goods-item-type {
      position: absolute;
    }
    >img {
      display: block;
      vertical-align: top;
    }
  }
  .goods-item-footer {
    background: #fff;
    padding: 10px;
    .goods-item-info {
      padding-bottom: 5px;
      h3 {
        font-size: 16px;
        small {
          font-weight: normal;
        }
      }
      p {
        color: #666;
        font-size: 14px;
      }
    }
    .goods-item-price {
      display: flex;
      padding-top: 10px;
      .item {
        flex: 1;
        text-align: center;
        line-height: 1.4;
      }
    }
  }
}

.goods-detail {
  margin-top: 10px;
  background: #fff;
  color: #333;
  font-size: 14px;
  line-height: 1.8;
  overflow: hidden;
  .goods-detail-content {
    margin: 10px;
  }
}

</style>
