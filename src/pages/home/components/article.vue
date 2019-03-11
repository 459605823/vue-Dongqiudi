<template>
    <div>
        <router-link to="/archive">
          <div class="item">
            <div class="item-left">
                <p>国安4-0客胜重庆，张玉宁中超首球，比埃拉造3球，巴坎布传射</p>
                <p class="comment"><span class="fix-top">置顶</span>1462评论</p>
            </div>
            <div class="item-right">
                <img src="https://img1.qunliao.info/fastdfs4/M00/C8/B3/180x135/crop/-/ChMf8FyDerKAGXUsAAKfvZbdmrE402.jpg" alt="">
            </div>
          </div>
        </router-link>
        <router-link to="/archive">
            <div class="item">
                <div class="item-left">
                    <p>山东2-2河南，格德斯双响，巴索戈破门，伊沃争议点球扳平</p>
                    <p class="comment"><span class="fix-top">置顶</span>4866评论</p>
                </div>
                <div class="item-right">
                    <img src="https://img1.qunliao.info/fastdfs4/M00/C8/B1/180x135/crop/-/ChNLklyDhGyAEjTrAAI51XSunFQ388.jpg" alt="">
                </div>
            </div>
        </router-link>
        <router-link to="/archive">
            <div class="item">
                <div class="item-left">
                    <p>连续拿出高光表现，武磊在西班牙人的地位飞速提升</p>
                    <p class="comment">866评论</p>
                </div>
                <div class="item-right">
                    <img src="https://img1.qunliao.info/fastdfs3/M00/1F/AE/180x135/crop/-/ChONolyDU4OAe1pjAAIa7xFK_MI225.jpg" alt="">
                </div>
            </div>
        </router-link>
        <router-link to="/archive">
            <div class="item">
                <div class="item-left">
                    <p>世体：巴萨已经计划和梅西续约至2022或2023年</p>
                    <p class="comment">2866评论</p>
                </div>
                <div class="item-right">
                    <img src="https://img1.qunliao.info/fastdfs4/M00/C8/59/180x135/crop/-/ChMf8FxrSn2AeM9MAAF59wMdQ6E997.jpg" alt="">
                </div>
            </div>
        </router-link>
        <router-link to="/archive">
            <div class="item">
                <div class="item-left">
                    <p>世体：巴萨已经计划和梅西续约至2022或2023年</p>
                    <p class="comment">2866评论</p>
                </div>
                <div class="item-right">
                    <img src="https://img1.qunliao.info/fastdfs4/M00/C8/59/180x135/crop/-/ChMf8FxrSn2AeM9MAAF59wMdQ6E997.jpg" alt="">
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Article'
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
