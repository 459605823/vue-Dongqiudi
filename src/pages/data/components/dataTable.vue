<template>
  <div>
    <table>
        <thead>
            <th>排名</th>
            <th>球队</th>
            <th>赛</th>
            <th>胜</th>
            <th>平</th>
            <th>负</th>
            <th>进/失</th>
            <th>积分</th>
        </thead>
        <tbody>
            <tr :class="{topRank: club.isTop}" v-for="club of clubs" :key="club.rank">
                <td>{{club.rank}}</td>
                <td class="club-name">
                    <span class="logo">
                        <img :src="club.logo" alt="">
                    </span>
                    {{club.name}}
                </td>
                <td>{{club.matches}}</td>
                <td>{{club.wins}}</td>
                <td>{{club.ties}}</td>
                <td>{{club.loss}}</td>
                <td>{{club.goals}}</td>
                <td>{{club.points}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'dataTable',
  props: ['clubs']
}
</script>

<style lang="scss" scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 4rem;
    th {
        line-height: 1.5rem;
        background-color: $default-color;
        color: #fff;
    }
    td {
        text-align: center;
        line-height: 2rem;
        border-bottom: 1px solid #ebebeb;
        font-size: 1.2rem;
        padding: .5rem 0;
    }
    .club-name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .logo {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        margin-right: .5rem;
        margin-left: 1rem;
        img {
            max-width: 100%;
            height: auto;
        }
    }
}
.topRank {
    background-color: #ececec;
}
</style>
