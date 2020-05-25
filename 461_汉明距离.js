/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xStr = x.toString(2).padStart(32, '0')
    const yStr = y.toString(2).padStart(32, '0')
    let count = 0
    for (let i = 0; i < 32; i++) {
        if (xStr[i] !== yStr[i]) count++
    }
    return count
};
