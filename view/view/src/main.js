// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './vuex/'
import $ from 'jquery'
import mui from 'muse-ui'//引入muse-ui
import 'muse-ui/dist/muse-ui.css' // 全局样式包含 normalize.css
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import MintUI from 'mint-ui'//引入mint-ui
import 'mint-ui/lib/style.css'
import './assets/css/my-mint.css';//针对mint-ui修改css样式
import ElementUI from 'element-ui';//引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from 'axios';
import Vuex from 'vuex';
window.Toast= Toast;
window.Indicator= Indicator;

Vue.use(mui)
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(Vuex)

/*import './assets/css/style.css' */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  template: '<App/>',
  components: { App }
})
