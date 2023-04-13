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
function encodeLine( str ) {

  const strArray = str.split( '' );

  let line = '';
  let currentRepetitions = 0;
  let currentChar = '';

  strArray.forEach( ( char ) => {

    if ( currentChar && currentChar === char ) {

      currentRepetitions++;
      return;

    } else if ( currentChar && currentChar !== char ) {

      currentRepetitions++;
      line += currentRepetitions > 1 ? `${ currentRepetitions }${ currentChar }` : currentChar;
      currentRepetitions = 0;

    }

    currentChar = char;

  } );

  currentRepetitions++;
  line += currentRepetitions > 1 ? `${ currentRepetitions }${ currentChar }` : currentChar;

  return line;

}

module.exports = {
  encodeLine
};
