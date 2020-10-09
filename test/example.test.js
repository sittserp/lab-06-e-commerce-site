// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderBakery, findById, calcLineItem, renderCart, calcOrderTotal, addProduct } from '../utils.js';
import { bakery } from '../bakery.js';
import { cartItems } from '../cart/cart-items.js';

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

    const expected = '<li id="cookie"><p class="name">Chocolate Chip Cookie</p><img src="../assets/chocolate-chip.jpeg"><p class="description">Chocolate Chip Cookie</p><p class="price">$2.00</p><input type="number" value="1"><button value="cookie">Add to Cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBakery(bakedItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('I expect the function to take an array and an id, and returns the first item found that has an .id property that matches the passed in id.', (expect) => {
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

test('I expect the function to take the quantity and amount and return the total price', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const price = 2;
    const quantity = 2;

    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(price, quantity);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('TABLE: I expect the function to render the same table as the hard-coded example.', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const cartLineItem = {
        id: 'cookie',
        quantity: 2
    };

    const expected = '<tr><td>Chocolate Chip Cookie</td><td>4</td><td>$2.00</td><td>$8.00</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCart(cartLineItem.id);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('CalcOrderTotal: I expect the function to add up all the line and return the total price', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const testCartItems = [
        {
            id: 'cookie',
            quantity: 4,
        },
        {
            id: 'pie',
            quantity: 2,
        },
        {
            id: 'cupcake',
            quantity: 1,
        }
    ];

    const expected = 17;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(testCartItems);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('ADD PRODUCT: I expect the function to take an object and inject it into local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const newProduct = {
        id: 'eclair',
        name: 'Éclair',
        image: '../assets/eclair.png',
        description: 'All the yummy goodness',
        category: 'chocolate',
        price: 3
    };

    const expected = [
        {
            'category': 'chocolate',
            'description': 'Thin, Crisp, and Crunchy with no apologies',
            'id': 'cookie',
            'image': '../assets/chocolate-chip.png',
            'name': 'Chocolate Chip Cookie',
            'price': 2
        },
        {
            'category': 'berry',
            'description': 'Delicious berry pie filling over our cream cheese cream pie base',
            'id': 'pie',
            'image': '../assets/pie.jpg',
            'name': 'Marion Berry Cream Pie Slice',
            'price': 3.5
        },
        {
            'category': 'chocolate',
            'description': 'Chocolate frosting on yellow cake',
            'id': 'cupcake',
            'image': '../assets/cupcake.png',
            'name': 'Cupcake',
            'price': 2
        },
        {
            'category': 'chocolate',
            'description': 'We double down on double chocolate',
            'id': 'cake',
            'image': '../assets/chocolate-cake.png',
            'name': 'Chocolate Cake Slice',
            'price': 3.5
        },
        {
            'category': 'berry',
            'description': 'Solid and Flaky - NOT a muffin...',
            'id': 'scone',
            'image': '../assets/blueberry-scone.png',
            'name': 'Blueberry Scone',
            'price': 2.5
        },
        {
            'category': 'cinnamon',
            'description': 'Extra Cinnamon and Extra Roll',
            'id': 'cinnamon-roll',
            'image': '../assets/cinnamon-rolls.png',
            'name': 'Cinnamon Roll',
            'price': 3
        },
        {
            'category': 'chocolate',
            'description': 'All the yummy goodness',
            'id': 'eclair',
            'image': '../assets/eclair.png',
            'name': 'Éclair',
            'price': 3
        }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addProduct(newProduct);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

