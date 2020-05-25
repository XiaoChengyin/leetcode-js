/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    if (s === '') return 0
    let max = 1
    for (let start = 0; start < len - max; start++) {
        for (let end = start + 1; end < len + 1; end++) {
            const sub = s.slice(start, end)
            if (sub.indexOf(s[end]) > -1 || s[end] == null) {
                max = Math.max(max, sub.length)
                break
            }
        }
    }
    return max
};

describe('lengthOfLongestSubstring', () => {
    test('test 1', () => {
        expect(lengthOfLongestSubstring('au')).toEqual(2)
    })
    test('test 2', () => {
        expect(lengthOfLongestSubstring('')).toEqual(0)
    })
    test('test 3', () => {
        expect(lengthOfLongestSubstring(' ')).toEqual(1)
    })
})
