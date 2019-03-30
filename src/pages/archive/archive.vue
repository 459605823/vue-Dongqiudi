<template>
    <div>
        <archive-header :comments="res.comments" :from="from"></archive-header>
        <archive-content :title="res.title" :writer="res.writer" :time="res.time" :content="res.content" :imgUrl="res.imgUrl"></archive-content>
        <archive-footer></archive-footer>
    </div>
</template>

<script>
import ArchiveHeader from './components/header'
import ArchiveFooter from './components/footer'
import ArchiveContent from './components/content'
import axios from 'axios'
export default {
  name: 'Archive',
  components: {
    ArchiveHeader,
    ArchiveFooter,
    ArchiveContent
  },
  data () {
    return {
      res: {},
      from: ''
    }
  },
  methods: {
    getArticleInfo () {
      axios.get('static/mock/articles.json').then(this.getArticleInfoSucc)
    },
    getArticleInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        var articles = res.data.articles
        for (var i = 0; i < articles.length; i++) {
          if (articles[i].id === this.$route.params.id) {
            this.res = articles[i]
            break
          }
        }
      }
    }
  },
  mounted () {
    this.getArticleInfo()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.from = from.fullPath // 保存来源路由，保证点击返回回到之前的页面
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
