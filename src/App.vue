<template>
  <div id="app">
    <MyContainer/>
  </div>
</template>

<script>
import MyContainer from './components/MyContainer.vue'

export default {
  name: 'App',
  components: {
    MyContainer
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
