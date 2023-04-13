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
function repeater( str, options ) {

  const addition = typeof options.addition === 'undefined' ? '' : `${ options.addition }`;

  const additionArray = new Array( options.additionRepeatTimes || 1 );
  additionArray.fill( addition );
  const stringAddition = additionArray.join( options.additionSeparator || '|' );

  const strArray = new Array( options.repeatTimes || 1 );
  strArray.fill( `${ str }${ stringAddition }` );

  return strArray.join( options.separator || '+' );

}

module.exports = {
  repeater
};
