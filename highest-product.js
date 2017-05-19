// given an array of numbers, find the greatest product using any 3 of the integers.

const highestProduct= (array) => {

}

// standard case
console.log(highestProduct([1, 2, 3, 4, 5]), 'should be 60');

// should handle negative numbers
console.log(highestProduct([-1, 2, 3, -4, 5]), 'should be 30');

// should handle when two negatives are used for product
console.log(highestProduct([-1, -2, 3, -4, 5]), 'should be 40');

// should handle when all products are negative
console.log(highestProduct([-1, -2, -3, -4, -5]), 'should be -6');

// should handle when all products are the same
console.log(highestProduct([2, 2, 2, 2, 2]), 'should be 8');
