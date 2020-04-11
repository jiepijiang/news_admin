import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 element ui 组件库的配置 -- 全局导入(可以在官网选择按需导入)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 注册element ui 组件 -- 注册全局
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
