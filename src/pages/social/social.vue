
<template>
  <div>
    <social-header :list="list" :headTitle="headTitle"></social-header>
    <div class="gap"></div>
    <matchinfo :matchinfo="matchinfo"></matchinfo>
    <social-article :articles="articles"></social-article>
    <loading :isLoading="isLoading"></loading>
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonFooter from 'common/components/footer.vue'
import socialHeader from 'common/components/header.vue'
import matchinfo from 'common/components/matchinfo.vue'
import socialArticle from './components/article.vue'
import loading from 'common/components/loading.vue'
import axios from 'axios'
export default {
  name: 'Social',
  components: {
    commonFooter,
    socialHeader,
    matchinfo,
    socialArticle,
    loading
  },
  data () {
    return {
      list: ['动态', '赛程', '数据', '球员', '资料'],
      headTitle: '圈子',
      articles: [],
      matchinfo: [],
      isLoading: false
    }
  },
  methods: {
    getSocialInfo () {
      axios.get('static/mock/social.json').then(this.getSocialInfoSucc)
    },
    getSocialInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.articles = data.articles
        this.matchinfo = data.matchinfo
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
        axios.get('static/mock/social.json').then(function (res) {
          res = res.data
          if (res.ret && res.data) {
            const moreData = res.data
            self.articles = self.articles.concat(moreData.articles)
            self.isLoading = false
          }
        })
      }, 1000)
    }
  },
  mounted () {
    this.getSocialInfo()
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
.gap {
  height: 0;
  width: 0;
  margin-top: 7rem;
}
</style>
