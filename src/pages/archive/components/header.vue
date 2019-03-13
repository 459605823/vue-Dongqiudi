<template>
    <div>
        <header>
            <router-link to="/"><i class="back iconfont iconfanhui"></i></router-link>
            <span class="header-title">懂球帝</span>
            <span class="comment">{{comments}}评论</span>
        </header>
    </div>
</template>

<script>
export default {
  name: 'ArchiveHeader',
  props: ['comments']
}
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    background-color: #fff;
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
