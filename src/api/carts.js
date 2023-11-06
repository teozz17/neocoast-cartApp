import instance from './config';

const getCarts = () => instance.get('/carts');

const getUserCart = (id) => instance.get(`/carts/user/${id}`);

const setUserCart = (cart_id) => instance.post(`/carts/${cart_id}/buy`);

export {getUserCart, getCarts, setUserCart};