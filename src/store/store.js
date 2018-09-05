import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  mutations: {
    changeUserInfo(state, user) {
      console.log(user)
      state.userInfo = user
    }
  },
  actions: {
    changeUserInfo (context, user) {
      context.commit('changeUserInfo', user)
    }
  }
})
