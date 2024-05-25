<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <RouterView />
    <a href="https://beian.miit.gov.cn/" class="beianhao" target="_blank">京ICP备2024062605号-1</a>
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(250, 250, 250);
  display: flex;
  position: relative;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
.beianhao {
  position: absolute;
  bottom: 10px;
}
</style>
