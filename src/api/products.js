import instance from './config';

const getProducts = () => instance.get('/products');

const getProduct = (id) => instance.get(`/products/${id}`);

const getProductsByCategory = (category) => instance.get(`/products/category/${category}`);

const getCategories = () => instance.get('/products/categories');

export {getProduct, getProducts, getProductsByCategory, getCategories};