const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let alreadyGot = [];
  let index = 0;
  let reversedArr = names;
  let counter;
  for (const i of reversedArr) {
    counter = alreadyGot.filter(x => x === i).length;
    if (counter >= 1) {
      reversedArr[index] = `${i}(${counter})`;
      alreadyGot.push(`${i}(${counter})`);
      alreadyGot.push(i);
    } else {
      reversedArr[index] = i;
      alreadyGot.push(i);
    }
    index++
  }
  return reversedArr;
}

module.exports = {
  renameFiles
};
