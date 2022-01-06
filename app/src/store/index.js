import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hadLogin: false,
    isShow : false,
    userInfo:{
      userName:'z',
      passWord:'123',
      temperature:'36.9℃',
      status:'健康',
      age:'18',
      sex:'女',
      address:'舟山XX小区',
      tel:'12345678',
      loc:{
        lng:0,
        lat:0
      }
    }
  },
  getters:{
    isShow: state => state.isShow,
    hadLogin:state => state.hadLogin
  },
  mutations: {
    showCharts(state){
      state.isShow = !state.isShow
    },
    login(state){
      state.hadLogin = true
    },

  },
  actions: {
  },
  modules: {
  }
})
export default store
