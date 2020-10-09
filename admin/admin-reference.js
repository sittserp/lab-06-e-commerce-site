import { getFromLocalStorage, setInLocalStorage } from '../utils.js';
import { bakery } from '../bakery.js';

const PRODUCTS = 'PRODUCTS';

const adminReference = getFromLocalStorage(PRODUCTS) || [];
if (adminReference === undefined) {
    setInLocalStorage(PRODUCTS, bakery);
}

