<!--
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-11 16:45:32
 * @FilePath     : \learnstore\src\App.vue
 * @Description  :
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  height: 100vw;
}
</style>
<script>
export default {
  created () {
    // this.$router.push({ name: 'Home' })
  }
}
</script>
