/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sFormat = s.split('').sort().join('')
    let tFormat = t.split('').sort().join('')
    return tFormat === sFormat
};