import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skin : window.localStorage.getItem('skin')
  },
  mutations: {
    
  },
  actions: {

  }
})
