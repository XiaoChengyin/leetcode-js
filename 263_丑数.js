/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    let divide = (num) => {
        if (num % 2 === 0) return num / 2
        if (num % 3 === 0) return num / 3
        if (num % 5 === 0) return num / 5
        return false
    }
    if (num === 0) return false
    if (num === 1) return true
    while(num !== 1) {
        num = divide(num)
        if (!num) return false
    }
    return true
};
