import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Add from './views/Add.vue';
import Info from './views/Info.vue';
// import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  base: '/yiTownWebApp/',//这个配置也很重要，否则会出现页面空白情况
  linkActiveClass: 'active', //当router-link被激活时，给它一个默认的class
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [
        {
          path: 'list',
          
          component: (() => import(/* webpackChunkName: "group-foo" */ './views/List.vue')),
             
        },
        {
          path: 'user',
          component: (() => import(/* webpackChunkName: "group-foo" */ './views/User.vue')),
          
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }

  ] 
})

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('token');
    console.log("我是浏览器本地缓存的token: " + token);
    if (token === 'null' || token === '') {
      next('/');
    } else {
      next();
    }
  }
});



export default router




