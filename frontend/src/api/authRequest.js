import request from 'src/utils/axiosConfig';

export const postLogin = (data) => request.post('/login', { data });
export const postRegister = (data) => request.post('/signup', { data });
export const postLogout = () => request.post('/logout');
