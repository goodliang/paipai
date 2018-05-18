import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  user:{}
}
export default new Vuex.Store({
  state,
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    userInfo(state, payload){
    	state.user = payload
    }
  },
  action: {}
})
