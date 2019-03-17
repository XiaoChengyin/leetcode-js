/**
 * @param {number} num
 * @return {number}
 */
// keyword: 数根
var addDigits = function(num) {
    if (num < 10) return num
    if (num % 9 === 0) return 9
    return num % 9
};
