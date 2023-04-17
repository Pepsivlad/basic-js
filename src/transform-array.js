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
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let ans = [];
  const arrCopy = [...arr]
  for (let i = 0; i < arrCopy.length; i++) {
    switch (arrCopy[i]) {
      case '--discard-next':
        if (arrCopy.length - 1 > i) {
          arrCopy.splice(i + 1, 1);
        }
        break
      case '--discard-prev':
        if (ans.length && typeof(arrCopy[i - 1]) === 'number') {
          ans.pop();
        }
        break
      case '--double-next':
        if (arrCopy.length - 1 > i) {
          ans.push(arrCopy[i + 1]);
        }
        break
      case '--double-prev':
        if (ans.length && typeof(arrCopy[i - 1]) === 'number') {
          ans.push(ans.at(-1));
        }
        break
      default:
        ans.push(arrCopy[i]);
    }
  }
  return ans;
}

module.exports = {
  transform
};
