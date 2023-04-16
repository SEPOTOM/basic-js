const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor( direct ) {

    this._direct = direct === false ? false : true;
    this._range = [ 0, 25 ];
    this._totalChars = 26;
    this._minimumCharCode = 65;

  }

  encrypt( message, keyword ) {

    if ( !message || !keyword ) {

      throw new Error( 'Incorrect arguments!' );

    }

    let encryptedMessage = '';
    let messageCharUpperCase = null;
    let keywordCharUpperCase = null;

    for ( let i = 0, k = 0; i < message.length; i++, k++ ) {

      if ( k === keyword.length ) {

        k = 0;

      }

      messageCharUpperCase = message[ i ].toUpperCase();
      keywordCharUpperCase = keyword[ k ].toUpperCase();

      if ( messageCharUpperCase.charCodeAt( 0 ) === 32 ) {

        k--;

      }

      if ( messageCharUpperCase.charCodeAt( 0 ) - this._minimumCharCode < this._range[ 0 ] || messageCharUpperCase.charCodeAt( 0 ) - this._minimumCharCode > this._range[ 1 ] ) {

        encryptedMessage += messageCharUpperCase;
        continue;

      }

      const codesSum = ( messageCharUpperCase.charCodeAt( 0 ) - this._minimumCharCode ) + ( keywordCharUpperCase.charCodeAt( 0 ) - this._minimumCharCode );

      if ( codesSum > this._range[ 1 ] ) {

        encryptedMessage += String.fromCharCode( codesSum - this._totalChars + this._minimumCharCode );

      } else {

        encryptedMessage += String.fromCharCode( codesSum + this._minimumCharCode );

      }

    }

    return this._direct ? encryptedMessage : encryptedMessage.split( '' ).reverse().join( '' );

  }

  decrypt( message, keyword ) {

    if ( !message || !keyword ) {

      throw new Error( 'Incorrect arguments!' );

    }

    let decryptedMessage = '';
    let messageChar = null;
    let keywordCharUpperCase = null;

    for ( let i = 0, k = 0; i < message.length; i++, k++ ) {

      if ( k === keyword.length ) {

        k = 0;

      }

      messageChar = message[ i ];
      keywordCharUpperCase = keyword[ k ].toUpperCase();

      if ( messageChar.charCodeAt( 0 ) === 32 ) {

        k--;

      }

      if ( messageChar.charCodeAt( 0 ) - this._minimumCharCode < this._range[ 0 ] || messageChar.charCodeAt( 0 ) - this._minimumCharCode > this._range[ 1 ] ) {

        decryptedMessage += messageChar;
        continue;

      }

      const codesDiff = ( messageChar.charCodeAt( 0 ) - this._minimumCharCode ) - ( keywordCharUpperCase.charCodeAt( 0 ) - this._minimumCharCode );

      if ( codesDiff < this._range[ 0 ] ) {

        decryptedMessage += String.fromCharCode( codesDiff + this._totalChars + this._minimumCharCode );

      } else {

        decryptedMessage += String.fromCharCode( codesDiff + this._minimumCharCode );

      }

    }

    return this._direct ? decryptedMessage : decryptedMessage.split( '' ).reverse().join( '' );

  }

}

module.exports = {
  VigenereCipheringMachine
};
