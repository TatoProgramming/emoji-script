import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    text: '',
    nodes: [],
    result: ''
  },
  mutations: {
    addText (state, node) {
      state.text += node.display
      state.nodes.push(node)
    },
    setResult (state, result) {
      state.result = result
    }
  }
})

export default store
