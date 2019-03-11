<template>
    <div>
        <footer>
            <input type="text" placeholder="发表你的懂球帝言论" class="userinput">
            <span class="comment">
                <i class="iconfont iconpinglun"></i>
            </span>
            <span class="mark">
                <i class="iconfont iconshoucang"></i>
            </span>
            <span class="share">
                <i class="iconfont iconfenxiang"></i>
            </span>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'ArchiveFooter'
}
</script>

<style lang="scss" scoped>
footer {
     position: fixed;
     bottom: 0;
     display: flex;
     width: 100%;
     height: 4rem;
     background-color: #fff;
     z-index: 999;
     justify-content: space-between;
     align-items: center;
     border-top: 1px solid #ccc;
     padding: 0 1rem;
     .userinput {
         width: 15rem;
         height: 2.5rem;
         border-radius: .5rem;
         background-color: #eee;
         line-height: 2rem;
         padding-left: .8rem;
     }
     .comment {
         position: relative;
     }
     .comment::after {
         position: absolute;
         content: '637';
         color: $default-color;
         background-color: #fff;
         z-index: 3;
         top: 0rem;
         line-height: 1rem;
         right: .2rem;
     }
     span {
         width: 4rem;
         height: 2.5rem;
         line-height: 2.5rem;
         text-align: center;
         .iconfont {
             font-size: 2rem;
         }
     }
}
</style>
