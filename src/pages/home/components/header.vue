<template>
   <div>
    <div class="header">
        <div class="home-header">
            <img src="https://img1.qunliao.info/fastdfs4/M00/B1/6D/100x100/-/-/ChMf8FxIslCANJOdAAAok1n7B7I893.jpg" alt="" class="user-avatar" @click="showSidebar">
            <h1>懂球帝</h1>
        </div>
        <div class="home-nav">
            <ul>
            <li v-for="(item, index) in list" :key="index"><a href="#">{{item}}</a></li>
            </ul>
        </div>
    </div>
    <div class="shadow" ref="shadow" @click="hideSidebar"></div>
    <div class="sidebar" ref="sidebar">
        <div class="sidebar-header">
            <!-- <div class="cover"></div> -->
            <div class="header-top">
                <img class="sidebar-avatar" src="https://img1.qunliao.info/fastdfs4/M00/B1/6D/100x100/-/-/ChMf8FxIslCANJOdAAAok1n7B7I893.jpg" alt="">
                <div class="userinfo">
                    <h4>username</h4>
                    <p class="days">已成为懂球帝1788天</p>
                </div>
            </div>
            <div class="header-nav">
                <div class="nav-item">
                    <p class="nav-number">0</p>
                    <p class="nav-type">关注</p>
                </div>
                <div class="dash"></div>
                <div class="nav-item">
                    <p class="nav-number">0</p>
                    <p class="nav-type">关注</p>
                </div>
                <div class="dash"></div>
                <div class="nav-item">
                    <p class="nav-number">0</p>
                    <p class="nav-type">关注</p>
                </div>
            </div>
        </div>
        <div class="sidebar-content">
        </div>
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
  },
  methods: {
    showSidebar () {
      this.$refs.sidebar.style.left = 0
      this.$refs.shadow.style.display = 'block'
    },
    hideSidebar () {
      this.$refs.sidebar.style.left = '-25rem'
      this.$refs.shadow.style.display = 'none'
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
           cursor: pointer;
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
   .shadow {
       position: absolute;
       background-color: #2d2727;
       opacity: .2;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
       z-index: 1000;
       display: none;
   }
   .sidebar {
       background-color: #fff;
       top: 0;
       bottom: 0;
       width: 25rem;
       left: -25rem;
       position: absolute;
       z-index: 1001;
       transition: left .2s ease-in-out;
       .sidebar-header {
           position: relative;
           width: 100%;
           padding: 5rem 0 1rem 1rem;
           background-color: #ccc;
           color: #fff;
           overflow: hidden;
           .cover {
               position: absolute;
               top: 0;
               left: 0;
               bottom: 0;
               right: 0;
               background-color: #eee;
               opacity: .2;
               z-index: 1;
           }
           .header-top {
                display: flex;
                align-items: center;
                z-index: 3;
               .sidebar-avatar {
                   height: 5rem;
                   width: 5rem;
                   border-radius: 50%;
               }
               .userinfo {
                   margin-left: 1rem;
                   h4 {
                       font-size: 1.5rem;
                   }
               }
           }
           .header-nav {
               z-index: 3;
               display: flex;
               margin-top: 2rem;
               justify-content: space-between;
               align-items: center;
               width: 100%;
               .nav-item {
                  width: 30%;
                  text-align: center;
                  .nav-number {
                      font-size: 1.2rem;
                  }
                  .nav-type {
                      margin-top: 0.5rem;
                  }
               }
               .dash {
                   width: 1px;
                   height: 2rem;
                   background-color: #aaa;
               }
           }
       }
   }
</style>
