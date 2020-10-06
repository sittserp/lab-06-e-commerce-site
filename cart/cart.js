import { cartItems } from './cart-items.js';
import { renderCart } from '../utils.js';

const cartTable = document.getElementById('cart-body');

for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i].id;
    const cartLine = renderCart(cartItem);

    cartTable.append(cartLine);
}