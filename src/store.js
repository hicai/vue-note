import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    number: null,
    // 存储token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    //用户名
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : ''
  },
  mutations: {
    addList(state, value) {
      state.lists.push(value)
    },
    detail(state, index) {
      state.number = index
    },
    // 存储token存入localStorage
    changeLogin(state, data) {  
      state.token = data.token;
      localStorage.setItem('token', data.token);
    },

    //存储用户名
    getName(state, data){
      state.userName = data.userName
      localStorage.setItem('userName', data.userName);
    },
    
  //登出
  LOGOUT(state){
      // 登出的时候要清除token
      state.token = null
      state.user = null
      localStorag.removeItem('token')
      localStorag.removeItem('userNamer')
    }
  },
  actions: {

  },
});
