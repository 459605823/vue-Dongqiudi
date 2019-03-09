<template>
    <div>
        <div class="container">
            <div class="game-info">
                <div class="info-header">
                    <span class="league">中超</span>
                    <span class="round">第2轮</span>
                    <span class="time">
                        <div class="time-badge">直播</div>
                        90'
                    </span>
                </div>
                <div class="main-info">
                    <div class="club">
                        <div class="club-info">
                            <img src="http://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DmABW8BAACsptJDfvs734.png" alt="" class="club-badge">
                            <span>广州富力</span>
                        </div>
                        <div class="score">2</div>
                    </div>
                      <div class="club">
                        <div class="club-info">
                            <img src="http://sd.qunliao.info/fastdfs3/M00/B5/8F/ChOxM1xC25WADjxlAAAk_dekrYc862.png" alt="" class="club-badge">
                            <span>大连一方</span>
                        </div>
                        <div class="score">2</div>
                    </div>
                </div>
            </div>
            <div class="game-info">
                <div class="info-header">
                    <span class="league">中超</span>
                    <span class="round">第2轮</span>
                    <span class="time">
                        <div class="time-badge">直播</div>
                        90'
                    </span>
                </div>
                <div class="main-info">
                    <div class="club">
                        <div class="club-info">
                            <img src="http://sd.qunliao.info/fastdfs3/M00/B5/73/ChOxM1xC2DmABW8BAACsptJDfvs734.png" alt="" class="club-badge">
                            <span>广州富力</span>
                        </div>
                        <div class="score">2</div>
                    </div>
                      <div class="club">
                        <div class="club-info">
                            <img src="http://sd.qunliao.info/fastdfs3/M00/B5/8F/ChOxM1xC25WADjxlAAAk_dekrYc862.png" alt="" class="club-badge">
                            <span>大连一方</span>
                        </div>
                        <div class="score">2</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MatchInfo'
}
</script>

<style lang="scss" scoped>
    .container {
        height: 8rem;
        background-color: #f8f8f8;
        padding: .5rem 0;
        display: flex;
        .game-info {
            height: 7rem;
            background-color: #fff;
            width: 50%;
            padding: 0.5rem;
            border: 1px solid #f1eded;
        }
        .info-header {
            height: 2rem;
            .time {
                float: right;
                .time-badge {
                    color: $default-color;
                    border: 1px solid $default-color;
                    display: inline-block;
                    padding: 0 0.2rem;
                }
            }
        }
        .main-info {
            height: 4rem;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            .club {
                width: 100%;
                height: 2rem;
                div {
                    display: inline-block;
                }
                .club-info {
                    width: 60%;
                    height: 2rem;
                    line-height: 2rem;
                    span {
                       display: inline-block;
                       line-height: 2rem;
                       vertical-align: .4rem;
                    }
                    .club-badge {
                       width: 2rem;
                       height: 1.6rem;
                    }
                }
                .score {
                    float: right;
                    height: 100%;
                    line-height: 2rem;
                    margin-right: 2rem;
                }
            }
        }
    }
</style>
