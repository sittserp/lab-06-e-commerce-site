import { bakery } from '../bakery.js';
import { renderBakery } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < bakery.length; i++) {

    const bakedItem = bakery[i];

    const listItem = (renderBakery(bakedItem));

    ul.appendChild(listItem);
}