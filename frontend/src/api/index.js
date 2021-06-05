import { getAllProducts, getProduct, patchProduct } from './productRequest';

import { getUsers, getUser } from './userRequest';

import { getShops, getShop } from './shopRequest';

// Users

export const apiGetUsers = getUsers;
export const apiGetUser = getUser;

// Shops

export const apiGetShops = getShops;
export const apiGetShop = getShop;

// Products
export const apiGetAllProducts = getAllProducts;
export const apiGetProduct = getProduct;
export const apiPatchProduct = patchProduct;
