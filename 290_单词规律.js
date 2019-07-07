/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let map = {}
    let strArr = str.split(' ')
    let result = pattern.split('').every((char, idx) => {
        if (!map[char]) {
            map[char] = strArr[idx]
            return true
        } else if (map[char] === strArr[idx]) {
            return true
        }
        return false
    })
    if (result) {
        let values = Object.values(map)
        if (values.length !== Array.from(new Set(values)).length) result = false
    }
    if (pattern.length !== strArr.length) result = false
    return result
};
