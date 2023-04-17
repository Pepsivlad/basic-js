const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let firstChar;
  return Array.isArray(members) ? members.reduce((a, x) => {
          if (typeof(x) === 'string') {
            firstChar = x.trim().split('')[0].toUpperCase();
            if (firstChar.charCodeAt() > 64 && firstChar.charCodeAt() < 91) {
              a += firstChar;
            }
          }
          return a;
        }, '').split('').sort().join('') : false;
}

module.exports = {
  createDreamTeam
};
