import { PRODUCTS, getLocalProducts, setInLocalStorage } from '../utils.js';

const form = document.querySelector('form');

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

});