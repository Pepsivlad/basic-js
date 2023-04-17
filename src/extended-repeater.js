const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  ans = '';
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    ans += String(str);
    if (options.addition !== undefined) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        ans += String(options.addition);
        if (j + 1 < options.additionRepeatTimes) {
          ans += String(options.additionSeparator);
        }
      }
    }
    if (i + 1 < options.repeatTimes) {
      ans += String(options.separator);
    }
  }
  return ans;
}

module.exports = {
  repeater
};
