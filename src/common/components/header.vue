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
            <div class="cover"></div>
            <div class="top">
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
                        <p class="nav-type">粉丝</p>
                    </div>
                    <div class="dash"></div>
                    <div class="nav-item">
                        <p class="nav-number">0</p>
                        <p class="nav-type">发表</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-content">
            <ul class="sidebar-list">
                <li><a href="#"><i class="iconfont iconpinglun"></i>我的通知</a></li>
                <li><a href="#"><i class="iconfont iconshoucang"></i>收藏/历史</a></li>
                <li><a href="#"><i class="iconfont iconxitongxiaoxi"></i>系统消息</a></li>
                <li><a href="#"><i class="iconfont iconshangcheng"></i>懂球帝商城</a></li>
            </ul>
            <div class="toolsbar">
                <div class="row">
                    <div class="tools">
                        <div class="icon">
                            <i class="iconfont iconvip"></i>
                        </div>
                        <p>红单会员</p>
                    </div>
                    <div class="tools">
                        <div class="icon">
                            <i class="iconfont iconjinnang"></i>
                        </div>
                        <p>大数据锦囊</p>
                    </div>
                    <div class="tools">
                        <div class="icon">
                            <i class="iconfont iconshuju1"></i>
                        </div>
                        <p>懂彩帝</p>
                    </div>
                </div>
                <div class="row">
                    <div class="tools">
                        <div class="icon">
                            <i class="iconfont iconworld-cup"></i>
                        </div>
                        <p>中超排名预测</p>
                    </div>
                    <div class="tools">
                        <div class="icon">
                            <i class="iconfont iconyouxi"></i>
                        </div>
                        <p>游戏中心</p>
                    </div>
                    <div class="tools">
                        <div class="icon">
                            <i class="iconfont iconzuqiuchang- rotate"></i>
                        </div>
                        <p>我是教练</p>
                    </div>
                </div>
                <div class="row">
                    <div class="tools">
                        <div class="icon">
                            <i class="iconfont icon552dc065f0478"></i>
                        </div>
                        <p>扫一扫</p>
                    </div>
                </div>
            </div>
        </div>
        <footer class="sidebar-footer">
            <div class="footer-controler">
                <i class="iconfont iconfankui"></i>
                反馈
            </div>
            <div class="footer-controler">
                <i class="iconfont iconsousuo"></i>
                搜索
            </div>
            <div class="footer-controler">
                <i class="iconfont iconshezhi"></i>
                设置
            </div>
        </footer>
    </div>
   </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['top', 'list'],
  methods: {
    mo (e) {
      e.preventDefault()
    },
    showSidebar () {
      this.$refs.sidebar.style.left = 0
      this.$refs.shadow.style.display = 'block'
      this.$refs.sidebar.style.top = this.top + 'px'
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', this.mo, {passive: false}) // 禁止页面滑动
    },
    hideSidebar () {
      this.$refs.sidebar.style.left = '-25rem'
      this.$refs.shadow.style.display = 'none'
      document.body.style.overflow = 'auto'
      document.removeEventListener('touchmove', this.mo, {passive: false}) // 允许页面滑动
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
       position: fixed;
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
           background-image: url(https://img1.qunliao.info/fastdfs4/M00/C8/D3/ChMf8FyMkwyAfYfoAAJidYf3iHU335.jpg);
           background-size: 100%;
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
       .sidebar-content {
           background-color: #eee;
           width: 100%;
           padding-top: .8rem;
           .sidebar-list {
               background-color: #fff;
               margin-bottom: .8rem;
               li {
                   height: 3rem;
                   line-height: 3rem;
                   padding-left: 1rem;
                   border-bottom: 1px solid #eee;
                   i{
                       margin-right: 1rem;
                       font-size: 1.5rem;
                   }
               }
           }
           .toolsbar {
               overflow: auto;
               height: 22rem;
               background-color: #fff;
               display: flex;
               flex-direction: column;
               padding: 1rem;
               justify-content: space-between;
               .row {
                   display: flex;
                   justify-content: space-between;
                   align-items: center;
                   .tools {
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       width: 6rem;
                   }
                   .icon {
                       height: 4rem;
                       text-align: center;
                       width: 4rem;
                       border-radius: 50%;
                       border: 1px solid #ccc;
                       font-size: 2.5rem;
                       margin: 1rem 0;
                       i {
                           font-size: 1.8rem;
                       }
                   }
               }
           }
       }
       .sidebar-footer {
           position: relative;
           bottom: 0;
           left: 0;
           height: 4rem;
           width: 100%;
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding: 0 2rem;
           border-top: 1px solid #ddd;
           background-color: #fff;
           z-index: 8;
           .footer-controler {
               font-size: 1.5rem;
               width: 5rem;
           }
       }
   }
</style>
