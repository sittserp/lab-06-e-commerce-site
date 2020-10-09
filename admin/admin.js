import { PRODUCTS, getLocalProducts, setInLocalStorage } from '../utils.js';

const form = document.querySelector('form');

const priceInput = document.querySelector('#price-input');
const button = document.querySelector('button');

button.disabled = true;
priceInput.addEventListener('change', stateHandle);
function stateHandle() {
    if (document.querySelector('#price-input').value === '') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const description = data.get('description');
    const category = data.get('category');
    const price = data.get('price');

    const newBakedItem = {
        id: id,
        name: name,
        image: image,
        description: description,
        category: category,
        price: Number(price),
    };

    const localBakery = getLocalProducts();

    localBakery.push(newBakedItem);

    setInLocalStorage(PRODUCTS, localBakery);

    form.reset();

    button.disabled = true;

});