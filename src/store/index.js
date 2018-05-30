import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  user:{},
  token:'JB2aQRC0isx1UBRVRpmVM4k8eKz6s7A9'
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
