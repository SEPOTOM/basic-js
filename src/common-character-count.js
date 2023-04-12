const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {

  const s1Array = s1.split( '' );
  const s2Array = s2.split( '' );

  let commonCharacters = [];
  let s2CharIndex = null;

  for ( let char of s1Array ) {

    s2CharIndex = s2Array.indexOf( char );

    if ( s2CharIndex + 1 ) {

      commonCharacters.push( char );
      s2Array[ s2CharIndex ] = null;

    }

  }

  return commonCharacters.length;

}

module.exports = {
  getCommonCharacterCount
};
