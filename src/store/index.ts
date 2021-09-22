import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state: {
    count: 0
  },
  getters: {
    countAddOne: state => {
      return `现在count的值${state.count}`
    }
  },
  mutations: {
    countAddNumber(state, payload: number) {
      state.count += payload
    }
  },
  actions: {
    async getDataAndCountAddOne({ commit }, payload) {
      const rst:any = await axios(`https://registry.npm.taobao.org/egg/latest`)
      if (rst.name === 'egg') {
        commit('countAddNumber', `请求返回name为${rst.name}`)
      }
    }
  }
})