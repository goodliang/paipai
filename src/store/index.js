import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  defaultAddress:{},
  token:'PRkFTrOvW0Zpq9dAHPSr14iJglD-2GiL'
}
export default new Vuex.Store({
  state,
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    addToken(state, payload){
    	state.token = payload
    },
    setAddress(state, payload){
      state.defaultAddress = payload
    }
  },
  action: {}
})
