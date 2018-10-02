/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let numA = a.split('')
    let numB = b.split('')
    let result = ''
    let overflow = 0
    while(numA.length || numB.length){
        let charA = +numA.pop() || 0
        let charB = +numB.pop() || 0
        result += (charA + charB + overflow) % 2
        overflow = Math.floor((charA + charB + overflow) / 2)
    }
    if(overflow !== 0) result += overflow
    return result.split('').reverse().join('')
};