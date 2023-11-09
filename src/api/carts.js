import instance from './config';

const getCarts = () => instance.get('/carts');

const getUserCart = (id) => instance.get(`/carts/user/${id}`);

const getUserCartByCartId = (cart_id) => instance.get(`/carts/${cart_id}`);

export {getUserCart, getCarts, getUserCartByCartId};