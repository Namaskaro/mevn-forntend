import {sum} from 'ramda'

export default {
  state: {
    cart: {},
    cartItems: [],
    cartCount: 0,
    total: 0
  },
  getters: {
    cart: state => state.cart,
    cartItems: state => state.cartItems,
    cartCount: state => state.cartItems.length,
    total: ({cartItems}) => sum(cartItems.map(i => i.price)),
    index: state => _id => state.cartItems.findIndex(pr => pr._id === _id),
    cartItemsIds: state => state.cartItems.map(({_id}) => _id)
    // productsInCart: state => id =>
    //   state.cartItems.find(({id}) => item._id === id)
  },
  mutations: {
    addToCart(state, product) {
      // if (getters.productsInCart) {
      //   const currentProductsInCart = state.cartItems
      //   state.cartItems = currentProductsInCart.filter(
      //     ({_id}) => product._id !== _id
      //   )
      // } else {
      state.cartItems.push({...product, cnt: 1})
    },
    setCnt(state, {_id, cnt}) {
      let i = state.cartItems.findIndex(pr => pr._id === _id)
      state.items[i].cnt = Math.max(1, cnt)
    },
    remove(state, {ind}) {
      const index = state.cartItems.indexOf()
    }
  },
  actions: {
    addProductToCart({getters, commit}, _id, product) {
      if (!getters.productsInCart(_id)) {
        commit('addToCart', product)
      }
      debugger
    },
    setCnt(store, payload) {
      if (store.getters.productsInCart(payload._id)) {
        store.commit('setCnt', payload)
      }
    },
    remove({state, getters, commit}, _id) {
      if (state.cartItems) {
        commit('remove', {ind: getters.index(_id)})
      }
    }
  }
}
