import {request} from './generic.service'

const getProduct = id => request({url: `products/${id}`, method: 'get'})

const getProducts = () => request({url: `products`, method: 'get'})

const deleteProductFromCart = () =>
  request({url: `products/${id}`, method: 'delete'})

export {getProduct, getProducts, deleteProductFromCart}
