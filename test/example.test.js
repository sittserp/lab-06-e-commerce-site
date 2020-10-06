// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderBakery, findById } from '../utils.js';
import { bakery } from '../bakery.js'

const test = QUnit.test;

test('I expect the function to render the same as the hard-coded example.', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const bakedItem = {
        id: 'cookie',
        name: 'Chocolate Chip Cookie',
        image: '../assets/chocolate-chip.jpeg',
        description: 'Chocolate Chip Cookie',
        category: 'chocolate',
        price: 2
    };

    const expected = '<li id="cookie"><p class="name">Chocolate Chip Cookie</p><img src="../assets/chocolate-chip.jpeg"><p class="description">Chocolate Chip Cookie</p><p class="price">$2.00</p><button value="cookie">Add to Cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBakery(bakedItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('I expect the function to takes an array and an id, and returns the first item found that has an .id property that matches the passed in id.', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const someArray = bakery;
    const someID = 'cupcake';

    const expected = {
        id: 'cupcake',
        name: 'Cupcake',
        image: '../assets/cupcake.png',
        description: 'Chocolate frosting on yellow cake',
        category: 'chocolate',
        price: 2
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(someArray, someID);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
