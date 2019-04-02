<template>
  <div>
    <data-header :list="list" :headTitle="headTitle"></data-header>
    <table-header></table-header>
    <data-table :clubs="clubs"></data-table>
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonFooter from 'common/components/footer.vue'
import dataHeader from 'common/components/header.vue'
import tableHeader from './components/tableHeader.vue'
import dataTable from './components/dataTable.vue'
import axios from 'axios'
export default {
  name: 'Data',
  components: {
    commonFooter,
    dataHeader,
    tableHeader,
    dataTable
  },
  data () {
    return {
      list: ['西甲', '中超', '英超', '意甲', '德甲', '欧冠', '欧联', '亚冠', '法甲', '足协杯', '中甲', '中乙', '世界排名', '足总杯', '国王杯', '德国杯', '英联杯', '意杯'],
      headTitle: '数据',
      clubs: []
    }
  },
  methods: {
    getDataInfo () {
      axios.get('static/mock/data.json').then(this.getDataInfoSucc)
    },
    getDataInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.clubs = data.clubs
      }
    }
  },
  mounted () {
    this.getDataInfo()
  }
}
</script>

<style>
</style>
