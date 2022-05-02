const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) { 

  let res = 0;

for (let i = 0; i < matrix.length; i++) {
  res += matrix[i].filter(item => item === "^^").length;
}

  return res;
  
  // 2d option:
  // let count = 0;
  // let searchElem = "^^";

  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     if (matrix[i][j] == searchElem) {
  //       count ++;
  //     }
  //   }
  // }
  // return count;
}

module.exports = {
  countCats
};