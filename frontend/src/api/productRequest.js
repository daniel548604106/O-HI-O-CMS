import request from "../lib/axiosConfig";

export const getAllProducts = () => {
  return request.get("/products");
};

export const getProduct = (id) => {
  return request.get(`/products/product/${id}`);
};

export const patchProduct = (id, content) => {
  console.log(id);
  return request.patch(`/products/product/${id}`, { content });
};
