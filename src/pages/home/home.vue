<template>
    <div>
        <home-header></home-header>
        <home-nav></home-nav>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-matchinfo></home-matchinfo>
        <home-article :articles="articles"></home-article>
        <common-footer></common-footer>
    </div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeNav from './components/nav.vue'
import homeSwiper from './components/swiper.vue'
import homeArticle from './components/article.vue'
import homeMatchinfo from './components/matchinfo.vue'
import commonFooter from 'common/components/footer.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeNav,
    homeSwiper,
    homeArticle,
    homeMatchinfo,
    commonFooter
  },
  data () {
    return {
      swiperList: [],
      articles: []
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
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="scss" scoped>
</style>
