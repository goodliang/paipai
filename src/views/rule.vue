<template>
  <div class="main-body">
    <div class="header" style="position: fixed;background: #fff;">
      <x-header :left-options="{backText: ''}">升级VIP</x-header>
    </div>
    <div class="container">
      <div class="rule-main">
        <h5>A.商家承诺</h5>
        <p>1.卖家承诺所发拍品如实描述。</p>
        <p>2.卖家成交不卖，卖家应将保证金退一赔一给竞买成功人。</p>
        <p>3.竞拍成功后，拍品全国包邮(港澳台除外)。其中拍品重50斤以上（大件家具30斤）或面积大于2个平方不包邮，二手车、房地产、运输设备、不动产、明星见面会等也不包邮。</p>
        <h5>B. 拍卖行承诺</h5>
        <p>友情提示:根据中华人民共和国法律，拍卖行具有合法的拍卖经营主体资格，在中华人民共和国法律和政策允许的范围内，组织和开展拍卖活动。凡参加拍卖行组织、开展的文物、网络竞投拍卖、艺术品等收藏品拍卖活动的委托人、竞买人、买受人和其他相关各方均视为同意且应遵守《中华人民共和国拍卖法》。</p>
        <p>1. 依据《中华人民共和国拍卖法》的规定，拍卖行承诺如实描述拍品。</p>
        <p>2.拍卖行成交不卖，拍卖行应将保证金退一赔一向竞买成功人。</p>
        <p>3.关于拍卖行佣金收取：依据《中华人民共和国拍卖法》的规定，竞买人在竞拍成功后，需根据拍卖行约定（商品页面描述佣金额），缴纳约定比例、数额的佣金。</p>
        <p>4.关于运费：由竞买成功人承担，以拍卖行实际商品描述运费为准。（如：贵重商品额外保险费用需要由竞买成功人承担）。</p>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {}
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.rule-main {
  padding: 10px 10px 70px;
  line-height: 1.8em;
  p {
    color: #999;
    font-size: 13px;
  }
}

</style>
