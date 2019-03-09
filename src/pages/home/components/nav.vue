<template>
    <div class="home-nav">
        <ul>
           <li v-for="(item, index) in list" :key="index"><a href="#">{{item}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'homeNav',
  data () {
    return {
      list: ['头条', '热门', '视频', '西甲', '意甲', '德甲', '集锦']
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
