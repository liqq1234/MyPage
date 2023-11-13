<template>
  <div>
    <el-container>
      <el-header> <Header></Header></el-header>
      <router-view></router-view>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from './PageHeader.vue'
import Footer from './PageFooter.vue'
 export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style></style>