const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {

  const domainsArrays = domains.map( ( domain ) => domain.split( '.' ).reverse() );

  let DNSStats = {};

  domainsArrays.forEach( ( domainArray ) => {

    let singlePartDomain = `.${ domainArray[ 0 ] }`;
    let twoPartDomain = `.${ domainArray[ 0 ] }.${ domainArray[ 1 ] }`;
    let threePartDomain = `.${ domainArray[ 0 ] }.${ domainArray[ 1 ] }.${ domainArray[ 2 ] }`;

    if ( domainArray[ 0 ] && !( singlePartDomain in DNSStats ) ) {

      DNSStats[ singlePartDomain ] = 1;

    } else {

      DNSStats[ singlePartDomain ]++;

    }

    if ( domainArray[ 1 ] && !( twoPartDomain in DNSStats ) ) {

      DNSStats[ twoPartDomain ] = 1;

    } else if ( domainArray[ 1 ] ) {

      DNSStats[ twoPartDomain ]++;

    }

    if ( domainArray[ 2 ] && !( threePartDomain in DNSStats ) ) {

      DNSStats[ threePartDomain ] = 1;

    } else if ( domainArray[ 2 ] ) {

      DNSStats[ threePartDomain ]++;

    }

  } );

  return DNSStats;

}

module.exports = {
  getDNSStats
};
