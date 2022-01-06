/**
 * @param {string} s
 * @return {string}
 */
var firstUniqChar = function(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], true)
        } else {
            map.set(s[i], false)
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i])) return s[i]
    }
    return ' '
};
