import instance from './config';

const getProducts = () => instance.get('/products');

const getProduct = (id) => instance.get(`/products/${id}`);

export {getProduct, getProducts};