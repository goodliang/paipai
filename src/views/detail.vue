<template>
  <div>
    <div class="goods-item">
      <div class="goods-item-head">
        <router-link to="/" class="backIcion">
          <x-icon type="ios-arrow-back" size="30"></x-icon>
        </router-link>
        <img :src="detail.pic_url" width="100%">
        <div class="countDown">
          <span class="countDownTit" v-if="detail.status === 0">距结束：
              <clocker :time="new Date(detail.end_time*1000).toLocaleDateString()" format='%D 天 %H 时 %M 分 %S 秒 '></clocker>
            </span>
          <span class="countDownTit" v-if="detail.status === 1">距开始：
    <clocker :time="new Date(detail.start_time*1000).toLocaleDateString()" format='%D 天 %H 时 %M 分 %S 秒'></clocker>
            </span>
          <span class="countDownTit" v-if="detail.status === 2 ">已拍结</span>
        </div>
        <!--  <div class="countDown">
          <span class="countDownTit">距结束：</span>
          <clocker :time="detail.end_time"></clocker>
        </div> -->
      </div>
      <div class="goods-item-footer">
        <div class="goods-item-info vux-1px-b">
          <h3 class="text-justify"><span>{{detail.author}}</span><small class="text-muted f12 fwn">{{detail.type}}</small></h3>
          <p>{{detail.title}}</p>
        </div>
        <div class="goods-item-price">
          <div class="item vux-1px-r"><span class="text-info">¥{{detail.incr_price}}</span>
            <br><span class="text-muted f13">加价</span></div>
          <div class="item vux-1px-r"><span class="text-red">¥
           <countup :end-val="detail.last_price" :duration="0.5" ></countup>
          </span>
            <br><span class="text-muted f13">当前价</span>
          </div>
          <div class="item"><span class="text-info">¥{{detail.start_price}}</span>
            <br><span class="text-muted f13">起拍价</span></div>
        </div>
      </div>
    </div>
    <div class="goods-detail">
      <div class="goods-detail-content" v-html="detail.description">
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
      detail: {
        last_price: 0
      },
      id: '',
      doStart: false,
      startPrice: 0,
      incr_price: 0
    }
  },
  beforeCreate() {

    this.isLoading = true
    this.$http.get('/api/getgoodInfo?id=' + this.$route.params.id)
      .then((res) => {
        this.detail = res.data.data;


        document.title = this.detail.title
        this.isLoading = false
      })
      .catch((err) => {
        console.log(err)
      })




  },
  created() {},
  mounted() {

  },
  methods: {

  },
  computed: {
    isNum() {
      return parseInt(this.detail.incr_price);
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
      bottom: 0px;
      left: 0px;
      width: 100%;
      padding: 5px 10px;
      color: #fff;
      background: rgba(0, 0, 0, 0.5)
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

.backIcion {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 9;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  .vux-x-icon {
    fill: #fff;
  }
}

</style>
