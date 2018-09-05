// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import firebase from 'firebase'

// todo
// cssVars()

Vue.use(BootstrapVue)

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC6m-ZBnuxUIGLlFaC8vtY5cZpFiRUfnjc",
  authDomain: "vue-firebase-coreui.firebaseapp.com",
  databaseURL: "https://vue-firebase-coreui.firebaseio.com",
  projectId: "vue-firebase-coreui",
  storageBucket: "vue-firebase-coreui.appspot.com",
  messagingSenderId: "541616845754"
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log(1111)
        //this.$router.push('/success')
      } else {
        console.log(222)
        //this.$router.push('/auth')
      }
    });
  }
})
