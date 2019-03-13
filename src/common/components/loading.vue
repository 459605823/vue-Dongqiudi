<template>
      <div v-if="isLoading" class="loading-wrapper">
       <div class="football iconfont iconzuqiu-"></div>
       <span>懂球帝正在加载</span>
    </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrapper {
    width: 100%;
    height: 3rem;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 4rem;
    .football {
       font-size: 2rem;
       margin-right: 1rem;
       animation: rotate 2s linear infinite;
    }
    @keyframes rotate {
       0%{transform: rotate(0deg)}
       100%{transform: rotate(360deg)}
    }
}
</style>
