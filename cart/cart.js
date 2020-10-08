import { cartItems } from './cart-items.js';
import { renderCart, calcOrderTotal } from '../utils.js';

const CART = 'CART';

const cartTable = document.getElementById('cart-body');

for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i].id;
    const cartLine = renderCart(cartItem);

    cartTable.append(cartLine);
}

const cartTotal = document.getElementById('cart-total');

const totalPrice = calcOrderTotal(cartItems);

cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;

const orderButton = document.getElementById('order-button');

if (totalPrice <= 0) {
    orderButton.disabled = true;
} else {
    orderButton.disabled = false;
}

orderButton.addEventListener('click', () => {
    const cartAsAString = JSON.stringify(cartItems, true, 2);
    alert(cartAsAString);
    localStorage.removeItem(CART);
    window.location.href = 'https://sittserp.github.io/lab-06-e-commerce-site/';
});

