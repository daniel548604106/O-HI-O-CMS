import request from 'src/utils/axiosConfig';

export const getUsers = () => request.get('/users');

export const getUser = (id) => request.get(`/users/${id}`);
