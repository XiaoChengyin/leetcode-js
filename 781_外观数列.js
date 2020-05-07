/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1'
    }
    const last = countAndSay(n - 1) + '$'

    let result = ''
    let count = 0
    let current = ''
    last.split('').forEach(char => {
        if (count === 0) {
            current = char
            count++
        } else if (current === char) {
            count++
        } else {
            result += `${count}${current}`
            current = char
            count = 1
        }
    })
    return result
};
