<template>
  <div>
    <data-header :list="list" :headTitle="headTitle"></data-header>
    <table-header></table-header>
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonFooter from 'common/components/footer.vue'
import dataHeader from 'common/components/header.vue'
import tableHeader from './components/tableHeader.vue'
export default {
  name: 'Data',
  components: {
    commonFooter,
    dataHeader,
    tableHeader
  },
  data () {
    return {
      list: ['中超', '西甲', '英超', '意甲', '德甲', '欧冠', '欧联'],
      headTitle: '数据'
    }
  }
}
</script>

<style>
</style>
