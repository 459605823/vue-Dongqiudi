<template>
    <div>
        <div class="content" ref="wrapper">
            <h1>马赛队史第一位，巴洛特利在连续上场的4场主场都有进球</h1>
            <div class="article-info">
                <span class="writer">Rigeman</span>
                <span class="time">03-11 15:56</span>
            </div>
            <div class="article">
                在从尼斯转会至马赛后，巴洛特利作为新援在马赛主场出战了4场，而这4场比赛中巴洛特利都有进球，这是马赛队史在法甲45个赛季来的首位。
                <img src="https://img1.qunliao.info/fastdfs4/M00/C8/B0/ChNLklyDSKWAREzDAAJiPVsLKD8922.jpg" alt="">
                在马赛1-2里尔、2-0亚眠、2-0圣埃蒂安的比赛中，巴洛特利上场时都取得了进球。
                <br>
                <br>
                加上对阵尼斯的制胜球，巴洛特利连续4场在主场上场都取得了进球（1-0波尔多没进入大名单），这还是首位能代表马赛在法甲中做到这一点的新援。
                <br>
                <br>
                再转会至马赛后，他仅出战7场就斩获了5粒进球。
            </div>
        </div>
    </div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
  name: 'ArchiveContent'
//   mounted () {
//     this.scroll = new BScroll(this.$refs.wrapper)
//   }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    overflow: hidden;
    padding: 2rem 1rem 5rem;
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
