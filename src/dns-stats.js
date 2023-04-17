const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let subDomains = [];
  domains.forEach(x => x.split('.').reverse().forEach((y, i, arr) => subDomains.push(`.${arr.slice(0, i + 1).join('.')}`)));

  const uniqueSubDomains = [...new Set(subDomains)];
  let ans = {};
  uniqueSubDomains.forEach(x => ans[x] = subDomains.filter(elem => elem === x).length);
  return ans;
}

module.exports = {
  getDNSStats
};
