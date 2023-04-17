const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) { return '' }
  let count = 0;
  let prev = str[0];
  let ans = [];
  for (const i of str) {
    if (prev !== i) {
      ans.push(count + prev);
      count = 1;
    } else {
      count++;
    }
    prev = i;
  }
  ans.push(count + prev);
  return ans.join('').replace(/1/g, '');
}

module.exports = {
  encodeLine
};
