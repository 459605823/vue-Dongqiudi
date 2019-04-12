<template>
  <div>
    <keep-alive exclude="Archive">
      <transition name="fade">
        <router-view/>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
