<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="width: 200px; height: auto;">    <HelloWorld msg="Welcome to LiQQ'music"/>
    <MusicPlayer></MusicPlayer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MusicPlayer from './components/MusicPlayer.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MusicPlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
