<template>
  <div class="weui-tabbar">
                <a href="javascript:;" class="weui-tabbar__item">
                    <span style="display: inline-block;position: relative;">
                        <img src="https://weui.io/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
                    </span>
                    <p class="weui-tabbar__label">微信</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <img src="https://weui.io/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">通讯录</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <span style="display: inline-block;position: relative;">
                        <img src="https://weui.io/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                    </span>
                    <p class="weui-tabbar__label">发现</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                    <img src="https://weui.io/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">我</p>
                </a>
            </div>
</template>


<script>

</script>
<style lang="less">
  .weui-tabbar {
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background-color: #F7F7FA;

   
}

.weui-tabbar__item {
    display: block;
    flex: 1;
    padding: 5px 0 0;
    font-size: 0;
    color: #666;
    text-align: center;

    &.weui-bar__item_on {
        .weui-tabbar__icon,
        .weui-tabbar__icon > i,
        .weui-tabbar__label {
            color: #666;
        }
    }
}

.weui-tabbar__icon {
    display: inline-block;
    width: 27px;
    height: 27px;

    i&,
    > i {
        font-size: 24px;
        color: #666;
    }

    img {
        width: 100%;
        height: 100%;
    }
}

.weui-tabbar__label {
    text-align: center;
    color: #666;
    font-size: 10px;
    line-height: 1.8;
}
</style>