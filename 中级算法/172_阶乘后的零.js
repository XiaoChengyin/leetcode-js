/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // 若N=31，则return parseInt(31 / 5 ** 1) + parseInt(31 / 5 ** 2)
    let count = 0
    while( n != 0 ) {
        count += parseInt(n / 5)
        n = parseInt(n / 5)
    }
    return count
};
