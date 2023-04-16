const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {

  if ( !( arr instanceof Array ) ) {

    throw new Error( '\'arr\' parameter must be an instance of the Array!' );

  }

  const controls = [ '--discard-next', '--discard-prev', '--double-next', '--double-prev' ];
  const transformedArray = [];
  const discardedIndexes = new Set();

  for ( let i = 0; i < arr.length; i++ ) {

    if ( discardedIndexes.has( i ) || discardedIndexes.has( i + 1 ) || discardedIndexes.has( i - 1 ) ) {

      continue;

    }

    if ( arr[ i ] === '--discard-next' ) {

      discardedIndexes.add( i + 1 );
      i++;
      continue;

    }

    if ( arr[ i ] === '--discard-prev' ) {

      discardedIndexes.add( i - 1 );
      transformedArray.pop();

    }

    if ( arr[ i ] === '--double-next' && arr[ i + 1 ] ) {

      transformedArray.push( arr[ i + 1 ] );

    }

    if ( arr[ i ] === '--double-prev' && arr[ i - 1 ] ) {

      transformedArray.push( arr[ i - 1 ] );

    }

    if ( !controls.includes( arr[ i ] ) ) {

      transformedArray.push( arr[ i ] );

    }

  }

  return transformedArray;

}

module.exports = {
  transform
};
