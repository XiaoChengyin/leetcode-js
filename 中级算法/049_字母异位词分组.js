/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = strs.reduce((map, str) => {
        const key = str.split('').sort().join('')
        if (map[key]) {
            map[key].push(str)
        } else {
            map[key] = [str]
        }
        return map
    }, {})
    return Object.values(map)
};
