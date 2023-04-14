const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {

  const heightsArray = arr.map( ( value ) => value === -1 ? null : value );
  heightsArray.sort( ( a, b ) => {

    if ( a === null ) {

      return 1;

    }

    if ( b === null ) {

      return -1;

    }

    return a - b;

  } );

  let heightIndex = 0;

  for ( let i = 0; i < arr.length; i++ ) {

    if ( arr[ i ] === -1 ) {

      continue;

    }

    arr[ i ] = heightsArray[ heightIndex ];
    heightIndex++;

  }

  return arr;

}

module.exports = {
  sortByHeight
};
