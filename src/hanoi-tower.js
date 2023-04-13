const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnsSpeed ) {

  const SECONDS_IN_HOUR = 3600;
  const result = {

    turns: null,
    seconds: null,

  }

  result.turns = 3;

  for ( let i = 3, k = 0; k < disksNumber - 2; k++ ) {

    result.turns = result.turns * 2 + 1;

  }

  result.seconds = Math.floor( result.turns * SECONDS_IN_HOUR / turnsSpeed );

  return result;

}

module.exports = {
  calculateHanoi
};
