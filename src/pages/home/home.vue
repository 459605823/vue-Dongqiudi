<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-matchinfo></home-matchinfo>
        <home-article :articles="articles"></home-article>
        <loading :isLoading="isLoading"></loading>
        <common-footer></common-footer>
    </div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeArticle from './components/article.vue'
import homeMatchinfo from './components/matchinfo.vue'
import commonFooter from 'common/components/footer.vue'
import loading from 'common/components/loading.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeArticle,
    homeMatchinfo,
    commonFooter,
    loading
  },
  data () {
    return {
      swiperList: [],
      articles: [],
      isLoading: false,
      timer: null
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('static/mock/home.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.articles = data.articles
      }
    },
    handlescroll () {
      var totalHeight = document.documentElement.scrollHeight
      var scrollTop = document.documentElement.scrollTop
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
        axios.get('static/mock/home.json').then(function (res) {
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
    this.getHomeInfo()
    window.addEventListener('scroll', this.handlescroll)
  }
}
</script>

<style lang="scss" scoped>
</style>
