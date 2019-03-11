<template>
    <div>
        <archive-header></archive-header>
        <archive-content></archive-content>
        <archive-footer></archive-footer>
    </div>
</template>

<script>
import ArchiveHeader from './components/header'
import ArchiveFooter from './components/footer'
import ArchiveContent from './components/content'
export default {
  name: 'Archive',
  components: {
    ArchiveHeader,
    ArchiveFooter,
    ArchiveContent
  }
}
</script>

<style lang="scss" scoped>
</style>
