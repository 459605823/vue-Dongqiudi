<template>
    <div>
        <home-header></home-header>
        <home-nav></home-nav>
        <home-swiper></home-swiper>
        <home-matchinfo></home-matchinfo>
        <home-article></home-article>
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
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeNav,
    homeSwiper,
    homeArticle,
    homeMatchinfo,
    commonFooter
  }
}
</script>

<style lang="scss" scoped>
</style>
