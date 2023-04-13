const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {

  if ( !( members instanceof Array ) ) {

    return false;

  }

  let teamName = '';

  const sortedMembers = members.sort( ( a, b ) => {

    if ( typeof a !== 'string' && typeof b !== 'string' ) {

      return 0;

    }

    if ( typeof a !== 'string' ) {

      return -1;

    }

    if ( typeof b !== 'string' ) {

      return 1;

    }

    return a.trim().toUpperCase().charCodeAt( 0 ) - b.trim().toUpperCase().charCodeAt( 0 );

  } );

  sortedMembers.forEach( ( member ) => {

    if ( typeof member === 'string' ) {

      teamName += member.trim()[ 0 ].toUpperCase();

    }

  } );

  return teamName;

}

module.exports = {
  createDreamTeam
};
