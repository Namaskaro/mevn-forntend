import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import categories from './categories'
import cart from './cart'
import theme from './theme'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  // namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    categories,
    cart,
    theme,
    auth
  }
})
