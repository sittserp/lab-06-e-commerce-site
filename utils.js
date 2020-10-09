import { cartItems } from './cart/cart-items.js';
import { bakery } from './bakery.js';
export const CART = 'CART';
export const PRODUCTS = 'PRODUCTS';


export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(key, stringyItem);
}

export function getLocalProducts(){
    let localProducts = getFromLocalStorage(PRODUCTS);
    if (localProducts === null) {

        setInLocalStorage(PRODUCTS, bakery);
        localProducts = bakery;
    }

    return localProducts;
}

export function addProduct(newProduct) {

    const localBakery = getLocalProducts();

    localBakery.push(newProduct);

    setInLocalStorage(PRODUCTS, localBakery);

    return localBakery;

}

export function renderBakery(bakedItem) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');
    const number = document.createElement('input');

    li.id = bakedItem.id;
    name.classList.add('name');
    name.textContent = bakedItem.name;
    img.src = bakedItem.image;
    description.classList.add('description');
    description.textContent = bakedItem.description;
    price.classList.add('price');
    price.textContent = `$${bakedItem.price.toFixed(2)}`;
    number.type = 'number';
    number.defaultValue = 1;
    button.textContent = 'Add to Cart';
    button.value = bakedItem.id;
    button.addEventListener('click', () => {
        const cart = getFromLocalStorage(CART) || [];
        const item = findById(cart, button.value);
        if (item === undefined) 
        { const newItem = {
            id: button.value,
            quantity: number.value
        };
        cart.push(newItem);
        } else {
            item.quantity = Number(item.quantity) + Number(number.value);
        }
        setInLocalStorage(CART, cart);
        
    });

    li.appendChild(name);
    li.appendChild(img);
    li.appendChild(description);
    li.appendChild(price);
    li.appendChild(number);
    li.appendChild(button);

    return li;
    
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const myID = someArray[i];
        if (myID.id === someId) {
            return myID;
        }
    }
}

export function calcLineItem(price, quantity){
    return price * quantity;
}

export function renderCart(someID) {

    const cartItem = findById(getLocalProducts(), someID);
    const cartQuantity = findById(cartItems, someID);

    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const quantity = document.createElement('td');
    const price = document.createElement('td');
    const subtotal = document.createElement('td');
    
    name.textContent = cartItem.name;
    quantity.textContent = cartQuantity.quantity;
    price.textContent = `$${cartItem.price.toFixed(2)}`; 
    subtotal.textContent = `$${calcLineItem(cartItem.price, cartQuantity.quantity).toFixed(2)}`;

    tr.append(name);
    tr.append(quantity);
    tr.append(price);
    tr.append(subtotal);

    return tr;
}

export function calcOrderTotal(cartItems) {

    let accumulator = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const bakeryItem = findById(getLocalProducts(), cartItem.id);
        const subTotal = bakeryItem.price * cartItem.quantity;

        accumulator = accumulator + subTotal;

    }

    return accumulator;
}

