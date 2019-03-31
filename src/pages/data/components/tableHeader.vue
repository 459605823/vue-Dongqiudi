<template>
  <div>
    <nav class="navbar">
      <div class="selectBtn">
        <span id="trigger">2018/19</span>
        <span class="dropdownBtn iconfont iconxiala"></span>
      </div>
      <div class="btn-group">
        <button>积分</button>
        <button>球员榜</button>
        <button>球队榜</button>
        <button>赛程</button>
      </div>
    </nav>
    <div class="shadow" ref="shadow" @click="hideSelectbar"></div>
    <div class="selectbar" ref="selectbar">
      <ul class="select-list" ref="selectList">
        <div class="scroll-content">
          <li>2018/19</li>
          <li>2018/19</li>
          <li>2018/19</li>
          <li>2018/19</li>
          <li>2018/19</li>
          <li>2018/19</li>
          <li>2018/19</li>
          <li>2018/19</li>
          <li>2018/19</li>
        </div>
      </ul>
      <div class="controlers">
        <span class="btn">取消</span>
        <span class="btn">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import MobileSelect from 'mobile-select'
export default {
  name: 'tableHeader',
  methods: {
    showSelectBar () {
      this.$refs.selectbar.style.display = 'block'
      this.$refs.shadow.style.display = 'block'
      this.$modalHelper.afterOpen()
    },
    hideSelectbar () {
      this.$refs.selectbar.style.display = 'none'
      this.$refs.shadow.style.display = 'none'
      this.$modalHelper.beforeClose()
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.selectList)
    /* eslint-disable */
    var mobileSelect = new MobileSelect({
        trigger: "#trigger",
        wheels: [
            {
              data: ["2018/19", "2017/18", "2016/17", "2016/15", "2015/14", "2014/13", "2013/12"]
            }
        ]
    });
  },
  // 如果点击返回离开当前路由，也要恢复页面滚动
  beforeRouteLeave (to, from, next) {
    this.$modalHelper.beforeClose()
    next()
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  margin-top: 7rem;
  line-height: 3rem;
  background-color: #e0f4f0;
  color: #000;
  padding: 0 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  .selectBtn {
    width: 6rem;
  }
  .btn-group {
    margin-left: 1rem;
    flex: 1;
    display: flex;
    justify-content: space-between;
    button {
      padding: .2rem 1rem;
      background-color: #e0f4f0;
    }
    button:hover {
      color: $default-color;
      border-bottom: 2px solid $default-color;
    }
  }
}
.selectbar {
  position: fixed;
  display: none;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  font-size: 1.2rem;
  .select-list {
    position: relative;
    text-align: center;
    height: 20rem;
    overflow: hidden;
    padding: 2rem 0;
    .choosebar {
      position: absolute;
      top: 3rem;
      height: 3rem;
      background-color: $default-color;
      opacity: .3;
    }
    li {
      line-height: 3rem;
    }
  }
  .controlers {
    bottom: 0;
    position: absolute;
    width: 100%;
    display: flex;
    background-color: #eee;
    .btn {
      width: 50%;
      border-top: 1px solid #ccc;
      text-align: center;
      line-height: 3rem;
    }
    .btn:first-child {
      border-right: 1px solid #ccc;
    }
    .btn:hover {
      color: $default-color;
    }
  }
}
.shadow {
  position: fixed;
  display: none;
  opacity: .2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2d2727;
  z-index: 99;
}
</style>
