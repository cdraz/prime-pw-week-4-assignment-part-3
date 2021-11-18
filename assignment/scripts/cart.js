console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Declaring empty basket variable
let basket = []

// declaring addItem function
function addItem(item) {
    basket.push(item);
    return true;
} // end addItem

// testing addItem function

addItem("Hoodie");
addItem("Sneakers");
addItem("Fanny pack");


// Declaring listItems function
function listItems() {
    for (item of basket) {
        console.log(item);
    }
} // end listItems

