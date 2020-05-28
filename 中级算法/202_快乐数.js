/**
 * @param {number} n
 * @return {boolean}
 */
/**
 *  输入: 19
    输出: true
    解释: 
    1**2 + 9**2 = 82
    8**2 + 2**2 = 68
    6**2 + 8**2 = 100
    1**2 + 0**2 + 0**2 = 1
    如果不是快乐数，右边的和最终会进入循环
 */
var isHappy = function(n) {
    let map = {}
    while(!map[n]) {
        if (n === 1) return true
        map[n] = true
        n = n.toString().split('').reduce((sum, v) => sum + v ** 2, 0)
    }
    return false
};
