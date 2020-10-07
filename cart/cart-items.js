import { getFromLocalStorage } from '../utils.js';

const CART = 'CART';

export const cartItems = getFromLocalStorage(CART) || [];

