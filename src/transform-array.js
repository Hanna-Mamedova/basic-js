const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 * The function must not affect inital array. 
 * 
 * Control sequences are applied from left to right to initial array elements. 
 * 
 * Control sequences do not fall into the transformed array. 
 * 
 * Control sequences in initial array don't occur in a row. 
 * 
 * If there is no element next to the control sequence to which it can be applied in the initial array, 
 * or this element was previously deleted, it does nothing. 
 * 
 *  --discard-next excludes the next element of the array from the transformed array.
  --discard-prev excludes the previous element of the array from the transformed array.
  --double-next duplicates the next element of the array in the transformed array.
  --double-prev duplicates the previous element of the array in the transformed array.
 * 
 */

function transform(arr) {
  
if (!(arr instanceof Array)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--discard-next') {
      let result = arr.slice(0, i) + "," + arr.slice(i + 2);
      let newArray = result;
      return newArray;
  } else if (arr[i] === '--discard-prev') {
      let result = arr.slice(0, i - 1) + "," + arr.slice(i + 1);
      let newArray = result;
      return newArray;
  } else if (arr[i] === '--double-next') {
      let result = arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
      let newArray = result;
      return newArray;
  } else if (arr[i] === '--double-prev') {
      let result = arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
      let newArray = result;
  
      return newArray;
  }
}

}

module.exports = {
  transform
};
