/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var plus = (num, idx, digits) => {
        if(idx == 0 && num == 9){
            digits[idx] = 0
            digits.unshift(1)
            return digits
        }
        num++
        if(num > 9){
            digits[idx] = 0
            return plus(digits[idx-1], idx-1, digits)
        } else {
            digits[idx] = num
            return digits
        }
    }
    return plus(digits[digits.length-1], digits.length-1, digits)
};