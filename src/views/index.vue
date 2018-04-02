<template>
  <div>
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item selected @on-item-click="createdDate">热拍中</tab-item>
      <tab-item @on-item-click="createdDate">预拍</tab-item>
      <tab-item @on-item-click="createdDate">已拍结</tab-item>
    </tab>
    <div class="goods-list" v-if="hasContent">
      <div class="goods-item" v-for='(item,index) in goods'>
        <div class="goods-item-head">
          <img :src="item.img" width="100%">
          <div class="countDown">
            <span class="countDownTit" v-if="stateActive === 'ongoing'">距结束：</span>
            <span class="countDownTit" v-if="stateActive === 'preheating'">距开始：</span>
            <span class="countDownTit" v-if="stateActive === 'complete'">已拍结</span>
            <template v-if="stateActive !== 'complete'">
              <clocker :time="item.endTime"></clocker>
            </template>
          </div>
        </div>
        <div class="goods-item-footer">
          <div class="goods-item-info vux-1px-b">
            <h3 class="text-justify"><span>{{item.author}}</span><small class="text-muted f12 fwn">{{item.type}}</small></h3>
            <p>{{item.title}}</p>
          </div>
          <div class="goods-item-price">
            <div class="item"><span class="text-muted f14" v-if="stateActive === 'complete'">成交价：</span><span class="text-muted f14" v-else>当前价：</span><span class="text-red">¥
            <countup :start-val="item.startPrice" :end-val="item.nowPrice" :duration="2" class="demo1"></countup></span>
            </div>
            <div class="item"><span class="text-muted f14">起拍价：</span><span class="text-info">¥{{item.startPrice}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="no-content" v-else>
      暂无内容
    </div>
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'

export default {
  data() {
    return {
      isLoading: true,
      hasContent: false,
      state: ['ongoing', 'preheating', 'complete'], //进行中，预拍，已结束
      goods: [],
      stateActive: ''
    }
  },
  created() {
    this.createdDate(0)
  },
  mounted() {

  },
  methods: {
    createdDate(index) {
      this.isLoading = true
      this.stateActive = this.state[index]
      this.$http.get('https://www.easy-mock.com/mock/5abc9f432a81eb026059a2ac/api/list/' + this.stateActive)
        .then((res) => {
          this.goods = res.data.data
          this.isLoading = false
          if (this.goods.length) {
            this.hasContent = true
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {

  },
  components: {
    Tab,
    TabItem
  }
}

</script>
<style lang="less" rel="stylesheet/less">
.goods-item {
  margin: 10px;
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
      padding-top: 5px;
      .item {
        flex: 1;
      }
      .item:last-child {
        text-align: right;
      }
    }
  }
}

.vux-1px-b:after {
  border-bottom: 1px solid #f4f4f4;
  color: #f4f4f4;
}

</style>
