<template>
  <!-- 外层使用一层div包裹，在图片未加载完成时，div撑开高度，防止下部内容发生抖动 -->
  <div class="wrapper">
       <img class="swiper-img" src="https://img1.qunliao.info/fastdfs4/M00/C8/AE/640x256/crop/-/ChMf8FyCFo2AN_eEAAC2s9bJkxM839.jpg" />
       <div class="img-title">比卡纳瓦罗更适合国足的人，现在看来还真没有</div>
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
  }
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
        bottom: 0;
        font-size: 1.5rem;
        color: #fff;
    }
}
</style>
