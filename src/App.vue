<!--
 * @Date         : 2020-06-02 10:55:24
 * @LastEditors  : 曾迪
 * @LastEditTime : 2020-06-02 17:57:28
 * @FilePath     : \learnstore\src\App.vue
 * @Description  :
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
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
