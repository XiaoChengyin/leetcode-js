/**
 * @param {number} n
 * @return {number}
 */
// 斐波那契数列
var climbStairs = function(n) {
    if(n < 3) return n
    let a = 1
    let b = 2
    let result = 0
    for(let i = 3; i <= n; i++){
        result = a + b
        a = b
        b = result
    }
    return result
};