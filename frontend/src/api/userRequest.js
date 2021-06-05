import request from 'src/utils/axiosConfig';

export const getUsers = (keyword) => request.get(`/users?search=${keyword}`);

export const getUser = (id) => request.get(`/users/${id}`);
