// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderBakery } from '../utils.js';

const test = QUnit.test;

test('I expect the function to render the same as the hard-coded example.', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const bakedItem = {
        id: 'cookie',
        name: 'cookie',
        image: 'assets.chocolate-chip.jpeg',
        description: 'Chocolate Chip Cookie',
        category: 'chocolate',
        price: 2
    };

    const expected = '<li id="cookie" name="cookie"><img src="../assets/chocolate-chip.jpeg" alt="picture of a cookie"><p class="description">Chocolate Chip Cookie</p><p class="price">$2.00</p><button value="cookie">Add to Cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBakery(bakedItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
