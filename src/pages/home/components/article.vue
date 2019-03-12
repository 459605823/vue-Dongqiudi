<template>
    <div>
        <router-link :to="'/archive/' + item.id" v-for="item in articles" :key="item.id">
          <div class="item">
            <div class="item-left">
                <p>{{item.title}}</p>
                <p class="comment"><span class="fix-top">置顶</span>{{item.comments}}评论</p>
            </div>
            <div class="item-right">
                <img :src="item.imgUrl" alt="">
            </div>
          </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['articles']
}
</script>

<style lang="scss" scoped>
.item {
    width: 100%;
    border-bottom: 1px solid #ccc;
    height: 10rem;
    display: flex;
    padding: 1rem;
    .item-left {
        font-size: 1.3rem;
        height: 8rem;
        margin-right: 1rem;
        position: relative;
        width: 16.25rem;
        .comment {
            font-size: 1rem;
            position: absolute;
            bottom: 0;
            left: 0;
            .fix-top {
                display: inline-block;
                border: 1px solid $btn-color;
                color: $btn-color;
                padding: 0 0.2rem;
                margin-right: .5rem;
            }
        }
    }
    .item-right {
        img {
            width: 12rem;
            height: 8rem;
        }
    }
}
</style>
