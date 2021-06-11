import request from 'src/utils/axiosConfig';

export const getBanners = () => request.get('/banners');

export const getBanner = (id) => request.get(`/banners/${id}`);

export const patchBanner = (id, data) => request.patch(`/banners/${id}`, data);
