<template>
  <div class="footerBar">
    <router-link to="/index" class="item">
      <i class="iconfont f20 icon-paimaijilu"></i>
      <p>拍卖</p>
    </router-link>
    <router-link to="/price" class="item">
      <i class="iconfont f20 icon-yikoujia"></i>
      <p>一口价</p>
    </router-link>
    <router-link to="/info" class="item">
      <i class="iconfont f20 icon-zixun"></i>
      <p>艺讯</p>
    </router-link>
    <router-link to="/found" class="item">
      <i class="iconfont f20 icon-faxian-fuben"></i>
      <p>发现</p>
    </router-link>
    <router-link to="/userCenter" class="item">
      <i class="iconfont f20 icon-wode"></i>
      <p>我的</p>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.footerBar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  z-index: 500;
  bottom: 0;
  width: 100%;
  background-color: #F7F7FA;
  &:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #C0BFC4;
    color: #C0BFC4;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .item {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    height: 54px;
    box-sizing: border-box;
    color: #999999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    p {
      font-size: 12px;
      color: #666
    }
  }
  .router-link-active {
    color: #b4a078;
    p{
      color: #b4a078;
    }
  }
}

</style>
