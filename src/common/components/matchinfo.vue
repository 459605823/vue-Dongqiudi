<template>
    <div>
        <div class="container">
            <div class="game-info" v-for="item of matchinfo" :key="item.id">
                <div class="info-header">
                    <span class="league">{{item.league}}</span>
                    <span class="round">第{{item.round}}轮</span>
                    <span class="time">
                        <div class="time-badge">{{item.liveStatus}}</div>
                        <span v-if="item.time != null">{{item.time}}</span>
                    </span>
                </div>
                <div class="main-info">
                    <div class="club" v-for="club of item.clubs" :key="club.id">
                        <div class="club-info">
                            <img :src="club.logo" alt="" class="club-badge">
                            <span>{{club.name}}</span>
                        </div>
                        <div class="score" v-if="club.score != null">{{club.score}}</div>
                    </div>
                    <div class="startTime" v-if="item.startTime != null">{{item.startTime}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MatchInfo',
  props: ['matchinfo']
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
            position: relative;
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
                    margin-right: 1rem;
                    width: 1rem;
                }
            }
            .startTime {
                width: 3rem;
                height: 3rem;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -1.5rem;
            }
        }
    }
</style>
