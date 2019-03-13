<template>
    <div>
        <div class="content">
            <h1>{{title}}</h1>
            <div class="article-info">
                <span class="writer">{{writer}}</span>
                <span class="time">{{time}}</span>
            </div>
            <div class="article">
                {{content}}
                <img :src="imgUrl" alt="">
                {{content}}
                <br>
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ArchiveContent',
  props: ['time', 'writer', 'content', 'title', 'imgUrl']
}
</script>

<style lang="scss" scoped>
.content {
    position: absolute;
    top: 4rem;
    bottom: 5rem;
    left: 0;
    right: 0;
    padding: 2rem 1rem;
    font-size: 1.5rem;
    h1 {
        font-size: 2rem;
    }
    .article-info {
        margin: 1rem 0;
        font-size: 1.2rem;
        .writer {
            color: $default-color;
            margin-right: 0.5rem;
        }
        .time {
            color: #827c7c;
        }
    }
    img {
        width: 100%;
        margin: 2rem 0;
    }
}
</style>
