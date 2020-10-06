export function renderBakery(bakedItem) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');

    li.id = bakedItem.id;
    name.classList.add('name');
    name.textContent = bakedItem.name;
    img.src = bakedItem.image;
    description.classList.add('description');
    description.textContent = bakedItem.description;
    price.classList.add('price');
    price.textContent = `$${bakedItem.price.toFixed(2)}`;
    button.textContent = 'Add to Cart';
    button.value = bakedItem.id;

    li.appendChild(name);
    li.appendChild(img);
    li.appendChild(description);
    li.appendChild(price);
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