<template>
    <div>
      <router-link class="item" :to="'/archive/' + item.id" v-for="(item, index) in articles" :key="index">
          <div class="item-top clear">
              <div class="top-left left">
                  <div class="club-logo">
                    <img src="https://img1.qunliao.info/fastdfs3/M00/B5/7E/ChOxM1xC2RyAO0y3AAAVIBAG1T0205.png " alt="">
                  </div>
                  <div class="left-info">
                      <h3 class="club-name">巴塞罗那</h3>
                      <div class="article-from">来自文章</div>
                  </div>
              </div>
              <div class="top-right right">{{item.time}}前</div>
          </div>
          <div class="item-title">
            {{item.title}}
          </div>
          <div class="item-bottom clear">
              <div class="bottom-left left">
                  <img :src="item.imgUrl" alt="">
              </div>
              <div class="bottom-right">
                  {{item.comments}}评论
              </div>
          </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['articles']
}
</script>

<style lang="scss" scoped>
.item {
    padding: 1rem .8rem;
    border-bottom: 5px solid #f8f8f8;
    display: block;
}
.top-left {
    display: flex;
    justify-content: space-between;
    .club-logo {
        img {
            width: 4rem;
            height: 4rem;
        }
    }
    .left-info {
        margin-left: 1rem;
        .club-name {
            font-size: 1.4rem;
            margin-bottom: .5rem;
        }
        .article-from {
            color: $grey;
        }
    }
}
.top-right {
    line-height: 4rem;
    color: $grey;
}
.item-title {
    font-size: 1.3rem;
    margin: .8rem 0;
}
.item-bottom {
    position: relative;
    .bottom-left {
        img {
            width: 10rem;
            height: 8rem;
        }
    }
    .bottom-right {
        position: absolute;
        color: $grey;
        right: 0;
        bottom: 0;
    }
}
</style>
