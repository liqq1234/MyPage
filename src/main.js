import Vue from 'vue'
import App from './App.vue'
import VueKinesis from "vue-kinesis";
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import router from './router/router';
Vue.use(VueRouter); // 使用 Vue Router
Vue.use(VueKinesis);
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')