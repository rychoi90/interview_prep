// Given an array, return an array with the products of all other numbers except the one at that index

const sumArray = (array) => {
  var output = [];
  // array.forEach((value, index, array) => {

  // });
}

// standard case
console.log(sumArray([1, 2, 3, 4]), 'should be [24, 12, 8, 6]');

// should handle negative numbers
console.log(sumArray([-1, 2, -3, 4]), 'should be [-24, 12, -8, 6]');

// should handle empty array
console.log(sumArray([]), 'should be []');

// all zeros
console.log(sumArray([0, 0, 0, 0]), 'should be [0, 0, 0, 0]');
