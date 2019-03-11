<template>
    <div>
        <header>
            <router-link to="/"><i class="back iconfont iconfanhui"></i></router-link>
            <span class="header-title">懂球帝</span>
            <span class="comment">637评论</span>
        </header>
    </div>
</template>

<script>
export default {
  name: 'ArchiveHeader'
}
</script>

<style lang="scss" scoped>
header {
    height: 4rem;
    padding: 0 1rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back {
        font-size: 1.5rem;
    }
    .header-title {
        font-size: 2rem;
        font-weight: bold;
        display: inline-block;
        margin-right: -1.5rem;
    }
    .comment {
        font-size: 1.1rem;
        color: $default-color;
        border: 1px solid $default-color;
        line-height: 2rem;
        padding: .2rem .5rem;
        border-radius: .4rem;
    }
}
</style>
