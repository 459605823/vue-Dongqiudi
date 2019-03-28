<template>
    <div>
      <match-header :list="list" :headTitle="headTitle"></match-header>
      <div class="matchinfo-banner">
          2019-03-23 今天 星期六
      </div>
      <div class="match-list">
          <div class="match-item" v-for="item in matches" :key="item.index">
              <div class="club left">
                  <span>{{item.home.club}}</span>
                  <img :src="item.home.img" alt="" class="club-img">
              </div>
              <div class="match-info">
                  <div class="info-top">
                      <span class="time">{{item.time}}</span>
                      <span class="type">{{item.type}}</span>
                  </div>
                  <div class="info-mid">
                      <span>{{item.home.score}}</span>
                      -
                      <span>{{item.away.score}}</span>
                  </div>
                  <div class="info-bottom">
                      {{item.streamer}}
                  </div>
              </div>
              <div class="club right">
                  <img :src="item.away.img" alt="" class="club-img">
                  <span>{{item.away.club}}</span>
              </div>
          </div>
          <loading :isLoading="isLoading"></loading>
      </div>
      <common-footer></common-footer>
    </div>
</template>

<script>
import matchHeader from 'common/components/header.vue'
import commonFooter from 'common/components/footer.vue'
import loading from 'common/components/loading.vue'
import axios from 'axios'
export default {
  name: 'Match',
  components: {
    matchHeader,
    commonFooter,
    loading
  },
  data () {
    return {
      matches: [],
      isLoading: false,
      timer: null,
      list: ['中超', '欧冠', '英超', '西甲', '意甲', '德甲', '集锦'],
      headTitle: '比赛'
    }
  },
  methods: {
    getMatchInfo () {
      axios.get('static/mock/match.json').then(this.getMatchInfoSucc)
    },
    getMatchInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.matches = data.matches
      }
    },
    handlescroll () {
      var totalHeight = document.documentElement.scrollHeight
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var clientHeight = document.documentElement.clientHeight
      var bottom = totalHeight - scrollTop - clientHeight
      if (bottom < 50) {
        this.isLoading = true
        this.loadMore()
      }
    },
    loadMore () {
      var self = this
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        axios.get('static/mock/match.json').then(function (res) {
          res = res.data
          if (res.ret && res.data) {
            const moreData = res.data
            self.matches = self.matches.concat(moreData.matches)
            self.isLoading = false
          }
        })
      }, 1000)
    }
  },
  mounted () {
    this.getMatchInfo()
  },
  activated () { // keep-alive组件激活时调用
    window.addEventListener('scroll', this.handlescroll)
  },
  deactivated () { // keep-alive组件停用时调用
    // 绑定在window上的全局事件会在不同组件中触发，在离开当前组件时要对全局事件解绑
    // 跳转至另一个页面时要解除事件，防止在另一个页面触发当前页面的事件
    window.removeEventListener('scroll', this.handlescroll)
  }
}
</script>

<style lang="scss" scoped>
.matchinfo-banner {
    margin-top: 7rem;
    height: 2rem;
    line-height: 2rem;
    background-color: #ccc;
    text-align: center;
    font-size: 1.2rem;
}
.match-list {
   .match-item {
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 1rem 0;
       border-bottom: 1px solid #eee;
       .club {
           width: 10rem;
           display: flex;
           align-items: center;
           .club-img {
               width: 4rem;
               height: 4rem;
               margin: 0 1rem;
           }
       }
       .left {
           justify-content: flex-end;
       }
       .right {
           justify-content: flex-start;
       }
       .match-info {
           display: flex;
           align-items: center;
           flex-direction: column;
           margin: 0 1rem;
           .info-top {
               .type {
                   margin-left: .5rem;
               }
           }
           .info-mid {
              font-size: 2rem;
              margin: 1rem 0;
           }
           .info-bottom {
               color: $grey;
           }
       }
   }
}
</style>
