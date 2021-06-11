import { getAllProducts, getProduct, patchProduct } from './productRequest';

import { getUsers, getUser } from './userRequest';

import { getShops, getShop } from './shopRequest';

import { postLogin, postRegister } from './authRequest';
import { updateMyPassword, updateMyData } from './accountRequest';
import { getBanners, getBanner, patchBanner } from './bannerRequest';
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

// Auth
export const apiPostLogin = postLogin;
export const apiPostRegister = postRegister;

// Account
export const apiUpdateMyData = updateMyData;
export const apiUpdateMyPassword = updateMyPassword;

// Banners
export const apiPatchBanner = patchBanner;
export const apiGetBanners = getBanners;
export const apiGetBanner = getBanner;
