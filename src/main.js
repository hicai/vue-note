import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//import store from './store/index'
import axios from 'axios'
// 引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);


Vue.config.productionTip = false;
// 在之后不需要 写 网址， uri了
Vue.prototype.baseURL = 'http://map.ijjk.top:8089';

const axiosIns = axios.create({
  baseURL: Vue.prototype.baseURL,
  timeout: 10000,
  withCredentials: true, // 跨域
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});

// 添加请求拦截器，在请求头中加token
axiosIns.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

//异步请求后，判断token是否过期
axiosIns.interceptors.response.use(
  response => {
   // console.log('测试', response)
    return response;
   
  },
  error => {
    if (error.response) {
     if(response.data.code === -4499){ 
          localStorage.removeItem('token');
          this.$router.push('/'); 
     }

    }
  }
)





Vue.prototype.$axios = axiosIns;

new Vue({
  router,
  store,

  render: h => h(App),
}).$mount('#app');
