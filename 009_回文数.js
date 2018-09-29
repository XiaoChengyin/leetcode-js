/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let revertedStr = str.split('').reverse().join('')
    return str === revertedStr
};

// 不转换为字符串
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x !== 0)){
        return false
    }
    let revertedNum = 0
    while(x > revertedNum){
        revertedNum = revertedNum * 10 + x % 10
        x /= 10
    }
    return x === revertedNum || x === revertedNum / 10
};