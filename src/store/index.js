import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  user:{},
  token:''
}
export default new Vuex.Store({
  state,
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    addToken(state, payload){
      console.log(payload,'payload_token')
    	state.token = payload
    }
  },
  action: {}
})
