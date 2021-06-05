import request from '../utils/axiosConfig';

export const getAllProducts = () => request.get('/products');

export const getProduct = (id) => request.get(`/products/product/${id}`);

export const patchProduct = (id, content) => {
  console.log(id);
  return request.patch(`/products/product/${id}`, { content });
};
