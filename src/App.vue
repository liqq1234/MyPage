<template>
  <div id="app">
   <PageLayout></PageLayout>
  </div>
</template>

<script>
  import PageLayout from './components/PageLayout.vue';
  //import MusicPlayer from './components/MusicPlayer.vue'

  export default {
    name: 'App',
   components: {
    PageLayout,
    //MusicPlayer
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

.custom-element {
  color: rgb(11, 70, 11); /* 设置文字颜色为墨绿色 */
   font-size: 10px;
}
</style>
