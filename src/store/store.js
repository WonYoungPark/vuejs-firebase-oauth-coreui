import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import firebase from 'firebase'
export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          data => {
            const newUser = {
              id: data.user.uid,
              name: data.user.displayName,
              email: data.user.email,
              photoUrl: data.user.photoURL
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
})
