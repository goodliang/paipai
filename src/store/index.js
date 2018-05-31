import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  user:{},
  token:'sL6RTOIYaCxfZR8HtM7iAXu_kJ_megLR'
}
export default new Vuex.Store({
  state,
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    addToken(state, payload){
    	state.token = payload
    }
  },
  action: {}
})
