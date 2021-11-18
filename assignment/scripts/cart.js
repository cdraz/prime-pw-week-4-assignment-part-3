console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Declaring empty basket variable
let basket = []

// ***STRETCH*** Declaring maxItems variable
const maxItems = 5;

// ***STRETCH*** Declaring isFull function
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}
// Testing isFull function
console.log(`Testing isFull() - Expecting 'false': ${isFull()}`);

// ***STRETCH*** Declaring addItem function
function addItem(item) {
    if (isFull() === true) {
        return false;
    } else {
    basket.push(item);
    return true;
    }
} // end addItem

// testing addItem function
console.log(`Basket is currently: ${basket}`);
console.log(`Adding Hoodie: ${addItem('hoodie')}`);
console.log(`Adding Sneakers: ${addItem('sneakers')}`);
console.log(`Adding Fanny pack: ${addItem('fanny pack')}`);
console.log(`Basket is now: ${basket}`);

// Declaring listItems function
function listItems() {
    for (item of basket) {
        console.log(item);
    }
} // end listItems

// Testing listItems function
console.log('Testing listItems function:');
listItems();

// Declaring empty function
function empty() {
    basket = [];
} // end empty

// Testing empty function
console.log('Testing empty function (now running empty() ):');
empty();
console.log(`Your basket currently contains: ${basket}`);

// ***STRETCH*** Testing isFull & addItem functions on full basket
console.log('Testing addItem and isFull on a full cart:');
console.log(`Adding Hoodie: ${addItem('hoodie')}`);
console.log(`Adding Sneakers: ${addItem('sneakers')}`);
console.log(`Adding Fanny pack: ${addItem('fanny pack')}`);
console.log(`Adding Necklace: ${addItem('necklace')}`);
console.log(`Adding Socks: ${addItem('socks')}`);
console.log(`Testing is full - expect true: ${isFull()}`);
console.log(`Adding sixth item Jeans - testing addItem, expect false: ${addItem('jeans')}`);
console.log(`Basket is currently: ${basket}`);

// ***STRETCH*** Declaring function removeItem 
function removeItem(item) {
    let lowercaseItem = item.toLowerCase();
    if (basket.indexOf(lowercaseItem) === -1) {
        return null;
    } else {
        let removedItem = basket.splice(basket.indexOf(lowercaseItem), 1);
        return removedItem;
    }
} // end removeItem

// ***STRETCH*** Testing removeItem function
console.log(`Testing remove item function: current basket is ${basket}`);
console.log(`Removing sneakers: expected output 'sneakers': ${removeItem('SNEAKERS')}`);
console.log(`New basket after removing sneakers: ${basket}`);
console.log(`Testing remove item function with item not in cart (Basketball) - expect 'null': ${removeItem('Basketball')}`);