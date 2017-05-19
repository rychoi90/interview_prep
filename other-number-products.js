// Given an array, return an array with the products of all other numbers except the one at that index

const sumArray = (array) => {
  var output = [];
  var splicedArr = [];
  var size = array.length;
  array.forEach((value, index, array) => {
    if(isNaN(value)){
      return 'Not a Number'
    }
    splicedArr = array.slice(0,index).concat(array.slice(index+1, size));
    output.push(splicedArr.reduce((prev,curr) => {
      return prev * curr;
    }));
  });
  return output;
}

// standard case
console.log(sumArray([1, 2, 3, 4]), 'should be [24, 12, 8, 6]');

// should handle negative numbers
console.log(sumArray([-1, 2, -3, 4]), 'should be [-24, 12, -8, 6]');

// should handle empty array
console.log(sumArray([]), 'should be []');

// all zeros
console.log(sumArray([0, 0, 0, 0]), 'should be [0, 0, 0, 0]');

// should account for non numbers
console.log(sumArray([2, 1, 3, 'a']), 'should return "Not a Number"');
