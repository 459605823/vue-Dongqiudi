<template>
    <div>
      <footer>
          <router-link to="/" class="footer-btn">
              <i class="iconfont iconmulu"></i>
              <p class="btn-title">首页</p>
          </router-link>
           <router-link to="/" class="footer-btn">
              <i class="iconfont iconzhiboquyubofang"></i>
              <p class="btn-title">比赛</p>
          </router-link>
           <router-link to="/" class="footer-btn">
              <img src="https://img1.qunliao.info/fastdfs3/M00/B5/7E/ChOxM1xC2RyAO0y3AAAVIBAG1T0205.png " alt="" class="team">
          </router-link>
           <router-link to="/" class="footer-btn">
              <i class="iconfont iconquanzi"></i>
              <p class="btn-title">圈子</p>
          </router-link>
           <router-link to="/" class="footer-btn">
              <i class="iconfont iconshuju"></i>
              <p class="btn-title">数据</p>
          </router-link>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  footer {
      position: fixed;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 4rem;
      background-color: #fff;
      z-index: 6;
      justify-content: space-between;
      align-items: center;
      .footer-btn {
          width: 18%;
          height: 80%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: black;
          i {
              margin-bottom: 0.4rem;
          }
          img {
              width: 70%;
              height: 100%;
          }
      }
      .footer-btn:hover {
           color: $default-color;
      }
  }
</style>
