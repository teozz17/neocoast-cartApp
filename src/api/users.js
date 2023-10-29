import instance from './config';

const getUsers = () => instance.get('/users');

const getUser = (id) => instance.get(`/users/${id}`);

export {getUser, getUsers};

