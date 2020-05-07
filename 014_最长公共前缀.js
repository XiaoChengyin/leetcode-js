/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''
    let index = 0
    const base = strs.pop()
    let c
    while(base && (c = base[index])) {
        if (strs.every(str => str[index] === c)) {
            prefix += c
            index++
        } else {
            break
        }
    }
    return prefix
};
