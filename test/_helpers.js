const { grammar: melody } = require('../dist/index');
module.exports = {
  /**
   * Reports whether the given string is a valid melody program
   * @param {string} str The program to match
   * @return {boolean}
   */
  valid: str => melody.match(str).succeeded(),
};
