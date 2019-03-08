<template>
    <div>
        <home-header></home-header>
        <home-nav></home-nav>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeNav from './components/nav.vue'
import homeSwiper from './components/swiper.vue'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeNav,
    homeSwiper
  }
}
</script>

<style lang="scss" scoped>
</style>
