import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//初始化sessionStore.getItem('token') 这样子刷新页面就无需重新登录
const state = {
	userName: window.sessionStorage.getItem('userName'),
	token:window.sessionStorage.getItem('token')
}
const mutations = {
	//token保存到sessionStiorage里，表示登录状态
	SET_TOKEN:(state,data) => {
		window.sessionStorage.setItem('token', data) 
	},
	//获取用户名
  GET_USER: (state, data) => {
		// 把用户名存起来
		state.userName = data
		window.sessionStorage.setItem('userName', data)
	},
	//登出
	LOGOUT: (state) => {
		// 登出的时候要清除token
		state.token = null
		state.userName = null
		window.sessionStorage.removeItem('token')
		window.sessionStorage.removeItem('userName')
	}

}
const actions = {
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})
