<template>
  <!-- 外层使用一层div包裹，在图片未加载完成时，div撑开高度，防止下部内容发生抖动 -->
  <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgList" :key="index">
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
      },
      imgList: [{
        imgUrl: 'https://img1.qunliao.info/fastdfs4/M00/C8/AD/640x256/crop/-/ChNLklyCYu-AJhsHAAh0yfLtkWo122.png',
        imgTitle: '恒大1-0泰达取联赛开局两连胜，保利尼奥造杜佳黄油手'
      },
      {
        imgUrl: 'https://img1.qunliao.info/fastdfs4/M00/C8/AE/640x256/crop/-/ChMf8FyCFo2AN_eEAAC2s9bJkxM839.jpg',
        imgTitle: '比卡纳瓦罗更适合国足的人，现在看来还真没有'
      },
      {
        imgUrl: 'https://img1.qunliao.info/fastdfs4/M00/C8/AE/640x256/crop/-/ChMf8FyCFo2AN_eEAAC2s9bJkxM839.jpg',
        imgTitle: '比卡纳瓦罗更适合国足的人，现在看来还真没有'
      },
      {
        imgUrl: 'https://img1.qunliao.info/fastdfs4/M00/C8/AE/640x256/crop/-/ChMf8FyCFo2AN_eEAAC2s9bJkxM839.jpg',
        imgTitle: '比卡纳瓦罗更适合国足的人，现在看来还真没有'
      },
      {
        imgUrl: 'https://img1.qunliao.info/fastdfs4/M00/C8/AE/640x256/crop/-/ChMf8FyCFo2AN_eEAAC2s9bJkxM839.jpg',
        imgTitle: '比卡纳瓦罗更适合国足的人，现在看来还真没有'
      }]
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
        bottom: .2rem;
        font-size: 1.5rem;
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        line-height: 2rem;
        padding-left: .5rem;
    }
}
</style>
