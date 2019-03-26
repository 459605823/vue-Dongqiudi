<template>
  <div>
    <social-header :list="list" :headTitle="headTitle"></social-header>
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonFooter from 'common/components/footer.vue'
import socialHeader from 'common/components/header.vue'
export default {
  name: 'Social',
  components: {
    commonFooter,
    socialHeader
  },
  data () {
    return {
      list: ['动态', '赛程', '数据', '球员', '资料'],
      headTitle: '圈子'
    }
  }
}
</script>

<style>
</style>
