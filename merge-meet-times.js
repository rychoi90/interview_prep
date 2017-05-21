// write a function that will take in a series of meeting times as touples, and output an array of condensed times

//ex:

const mergeMeetings = (array) => {
  var sorted = array.sort((prev, curr) => {
    return prev[0] - curr[0];
  });

  // console.log(sorted);

  var merged = [];
  var previous = sorted[0];
  var last;

  // sorted.slice(1).forEach((current) => {
  //   if(previous[1] >= current[0]) {
  //     previous = [previous[0],Math.max(previous[1],current[1])];
  //   } else {
  //     merged.push(previous);
  //     previous = current;
  //   }
  // });
  // merged.push(previous);

  sorted.reduce((prev,curr) => {
    if(prev[1] >= curr[0]) {
      curr = [prev[0], Math.max(prev[1],curr[1])];
      last = curr;
      return curr;
    } else {
      merged.push(prev);
      last = curr;
      return curr;
    }
  });
  merged.push(last);


  return merged;
}

// // two times touching
// console.log(mergeMeetings([[0, 1], [2, 3]]), 'should be: [[0,1], [2,3]]');

// // times overlapping
// console.log(mergeMeetings([[6, 9], [5, 7]]), 'should be: [[5,9]');

// // times not connected
// console.log(mergeMeetings([[14, 15], [11, 12]]), 'should be: [[11,12], [14,15]]');

// // one time nested within other time
// console.log(mergeMeetings([[17, 20], [18, 19]]), 'should be: [[17,20]');

// // three times touching
// console.log(mergeMeetings([[21, 22], [21, 23], [22, 24]]), 'should be: [[21,24]]');

// all cases
console.log(mergeMeetings([[0, 1], [2, 3], [6, 9], [5, 7], [14, 15], [11, 12], [17, 20], [18, 19], [21, 22], [21, 23], [22, 24]]), 'should be: [[0,1], [2,3], [5,9], [11,12], [14,15], [17,20], [21,24]]');

