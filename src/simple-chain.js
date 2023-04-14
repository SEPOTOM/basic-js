const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  _chain: [],

  getLength() {

    return this._chain.length;

  },
  addLink( value = '' ) {

    this._chain.push( value );

    return this;

  },
  removeLink( position ) {

    if (
        typeof position !== 'number' ||
        +position.toFixed() !== position ||
        position - 1 < 0 ||
        position - 1 >= this.getLength()
      ) {

      this._chain.length = 0;

      throw Error( 'You can\'t remove incorrect link!' );

    }

    this._chain.splice( position - 1, 1 );

    return this;

  },
  reverseChain() {

    this._chain.reverse();

    return this;

  },
  finishChain() {

    const chain = this._chain.map( ( item ) => `( ${ item } )` ).join( '~~' );

    this._chain.length = 0;

    return chain;

  }
};

module.exports = {
  chainMaker
};
