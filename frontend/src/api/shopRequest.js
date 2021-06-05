import request from 'src/utils/axiosConfig';

export const getShops = () => request.get('/shops');

export const getShop = (id) => request.get(`/shops/${id}`);
