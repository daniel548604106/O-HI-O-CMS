import request from 'src/utils/axiosConfig';

export const updateMyPassword = (data) => request.patch('/account/my/password', data);
export const updateMyData = (data) => request.patch('/account/my', data);
