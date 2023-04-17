const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.isDirect = type;
    this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  
  encrypt(...args) {
    if (args.length < 2 || args.includes(undefined)) {
      throw new Error('Incorrect arguments!');
    }
    let ans = [];
    let [msg, key] = args;
    msg = msg.toUpperCase();
    key = key.toUpperCase();

    key = key.padEnd(msg.length, key);
    let counter = 0;
    msg.split('').forEach((item, index) =>{
      if (this.letters.includes(item)) {
        const passStr = this.letters.slice(this.letters.indexOf(item)).join('').padEnd(26, this.letters.join(''));
        ans.push(passStr[this.letters.indexOf(key[index - counter])]);
      } else {
        ans.push(item);
        counter++;
      }
    })
    return (this.isDirect) ? ans.join('') : ans.reverse().join('');
  }

  decrypt(...args) {
    if (args.length < 2 || args.includes(undefined)){
      throw new Error('Incorrect arguments!');
    }
    let [msg, key] = args;
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    
    key = key.padEnd(msg.length, key);
    const ans = [];
    let counter = 0;
    msg.split('').forEach((item, index) =>{
      if (this.letters.includes(item)){
        const passStr = this.letters.slice(this.letters.indexOf(key[index - counter])).join('').padEnd(26, this.letters.join(''));
        ans.push(this.letters[passStr.indexOf(item)]);
      }else{
        ans.push(item);
        counter++;
      }
    })
    return (this.isDirect) ? ans.join('') : ans.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
