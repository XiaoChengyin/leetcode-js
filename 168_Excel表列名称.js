/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (n <= 0) return ''
    n--
    return convertToTitle(parseInt(n / 26)) + s[n % 26]
};
