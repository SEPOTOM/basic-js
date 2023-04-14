const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {

  for ( let i = 0, k = 0; i < matrix.length; k++ ) {

    let currentItem = matrix[ i ][ k ];

    if ( currentItem === true ) {

      matrix[ i ][ k ] = '0';

    } else {

      matrix[ i ][ k ] = 0;

    }

    if ( k >= matrix[ 0 ].length - 1 ) {

      k = -1;
      i++;

    }

  }

  for ( let i = 0, k = 0; i < matrix.length; k++ ) {

    let currentItem = matrix[ i ][ k ];

    if ( typeof currentItem === 'string' ) {

      const firstRow = i - 1 < 0 ? i : i - 1;
      const firstColumn = k - 1 < 0 ? k : k - 1;
      const lastRow = i + 1 === matrix.length ? i : i + 1;
      const lastColumn = k + 1 === matrix[ 0 ].length ? k : k + 1;

      let currentInnerItem = null;
      let currentRow = firstRow;
      let currentColumn = firstColumn;

      while ( true ) {

        if ( currentRow === i && currentColumn === k ) {

          currentColumn++;
          continue;

        }

        currentInnerItem = matrix[ currentRow ][ currentColumn ];

        if ( typeof currentInnerItem === 'string' ) {

          matrix[ currentRow ][ currentColumn ] = `${ +matrix[ currentRow ][ currentColumn ] + 1 }`;

        } else {

          matrix[ currentRow ][ currentColumn ]++;

        }

        if ( currentColumn === lastColumn && currentRow < lastRow ) {

          currentColumn = firstColumn - 1;
          currentRow++;

        }

        if ( currentRow >= lastRow && currentColumn === lastColumn ) {

          break;

        }

        currentColumn++;

      }

    }

    if ( k >= matrix[ 0 ].length - 1 ) {

      k = -1;
      i++;

    }

  }

  for ( let i = 0, k = 0; i < matrix.length; k++ ) {

    matrix[ i ][ k ] = +matrix[ i ][ k ];

    if ( k >= matrix[ 0 ].length - 1 ) {

      k = -1;
      i++;

    }

  }


  return matrix;

}

module.exports = {
  minesweeper
};
