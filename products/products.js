import { renderBakery, getLocalProducts } from '../utils.js';

const localBakery = getLocalProducts();

const ul = document.querySelector('#list');

for (let i = 0; i < localBakery.length; i++) {

    const bakedItem = localBakery[i];

    const listItem = (renderBakery(bakedItem));

    ul.appendChild(listItem);
}