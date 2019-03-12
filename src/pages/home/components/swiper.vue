<template>
  <!-- 外层使用一层div包裹，在图片未加载完成时，div撑开高度，防止下部内容发生抖动 -->
  <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
          <div class="img-title">{{item.imgTitle}}</div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        // 配置显示页码项
        pagination: '.swiper-pagination',
        // 支持循环轮播
        loop: true
      }
    }
  },
  props: ['swiperList']
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 40%;
    position: relative;
    .swiper-img {
        width: 100%;
    }
    .img-title {
        position: absolute;
        bottom: .2rem;
        font-size: 1.5rem;
        color: #fff;
        width: 100%;
        line-height: 2rem;
        padding-left: .5rem;
        @include ellipsis;
    }
}
</style>
