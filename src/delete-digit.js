const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let modifiedArr;
  return String(n).split('').reduce((a, x, i, arr) => {
    modifiedArr = [...arr];
    modifiedArr.splice(i, 1);
    a = Math.max(+(modifiedArr.join('')), a)
    return a}, 0);
}

module.exports = {
  deleteDigit
};