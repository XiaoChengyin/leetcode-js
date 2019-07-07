/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < 0) {
           return false
       }
    return /^10*$/.test(num.toString(4))
};
