// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//lib-flexible + rem实现移动端自适应
import 'lib-flexible';

//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
