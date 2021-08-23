import {getProduct, getProducts} from '../services/products.service'

const state = {
  product: {},
  products: [],
  isLoading: false,
  productError: null,
  promo: 'SALE'
}
const getters = {
  product: state => _id => state.products.find(pr => pr._id === _id),
  products: ({products}) => products,
  productError: ({productError}) => productError,
  productPrices: ({products}) => products.map(({price}) => price),
  promo: state => state.promo
}
const mutations = {
  setProduct(state, product) {
    state.product = product
  },
  setProducts(state, products) {
    state.products = products
  },
  setProductError(state, error) {
    state.productError = error
  }
}
const actions = {
  async fetchProduct({commit}) {
    try {
      const product = await getProduct(_id)
      commit('setProduct', product)
    } catch (error) {
      commit('setProductError')
    }
  },
  async fetchProducts({commit}) {
    try {
      const products = await getProducts()
      commit('setProducts', products)
    } catch (error) {
      commit('setProductError')
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
