const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {

  const nArray = n.split( '-' );

  if ( nArray.length !== 6 ) {

    return false;

  }

  for ( let string of nArray ) {

    if (
        string.length !== 2 ||
        string.charCodeAt( 0 ) > 70 ||
        string.charCodeAt( 1 ) > 70
      ) {

      return false;

    }

  }

  return true;

}
module.exports = {
  isMAC48Address
};
