<template>
    <div class="home-header">
        <img src="https://img1.qunliao.info/fastdfs4/M00/B1/6D/100x100/-/-/ChMf8FxIslCANJOdAAAok1n7B7I893.jpg" alt="" class="user-avatar">
        <h1>懂球帝</h1>
    </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="scss" scoped>
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
</style>
