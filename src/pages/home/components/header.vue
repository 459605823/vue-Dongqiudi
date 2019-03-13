<template>
    <div class="header">
        <div class="home-header">
            <img src="https://img1.qunliao.info/fastdfs4/M00/B1/6D/100x100/-/-/ChMf8FxIslCANJOdAAAok1n7B7I893.jpg" alt="" class="user-avatar">
            <h1>懂球帝</h1>
        </div>
        <div class="home-nav">
            <ul>
            <li v-for="(item, index) in list" :key="index"><a href="#">{{item}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
      list: ['头条', '热门', '视频', '西甲', '意甲', '德甲', '集锦']
    }
  }
}
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
        background-color: #fff;
    }
    .home-header {
       text-align: center;
       line-height: 4rem;
       background-color: $default-color;
       width: 100%;
       h1 {
          color: #fff;
          font-weight: 500;
          letter-spacing: .2rem;
       }
       .user-avatar {
           position: absolute;
           height: 2.5rem;
           width: 2.5rem;
           border-radius: 50%;
           left: 1rem;
           top: calc(2rem - 2.5rem/2);
           border: 1px solid #fff;
       }
   }
    .home-nav {
       line-height: 3rem;
       padding: 0 1rem;
       border-bottom: 1px solid #ccc;
       ul {
          display: flex;
          justify-content:space-between;
          a {
              color: #000;
              font-size: 1.2rem;
              font-weight: 500;
          }
          a:hover {
              color: $default-color;
          }
       }
   }
</style>
