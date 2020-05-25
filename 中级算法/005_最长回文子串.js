/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length
    if (len < 2) return s
    let longest = s[0]
    for (let i = 0; i < len; i++) {
        for (let offset = 0; offset < len / 2; offset++) {
            const start = i - offset
            const end = i + offset
            if (s[start] && s[end] && s[start] === s[end]) {
                if (offset * 2 + 1 > longest.length) {
                    longest = s.slice(start, end + 1)
                }
            } else {
                break
            }
        }
        if (s[i] === s[i + 1]) {
            for (let offset = 0; offset < len / 2; offset++) {
                const start = i - offset
                const end = i + offset + 1
                if (longest.length < 2) longest = s.slice(i, i + 2)
                if (s[start] && s[end] && s[start] === s[end]) {
                    if (offset * 2 + 2 > longest.length) {
                        longest = s.slice(start, end + 1)
                    }
                } else {
                    break
                }
            }
        }
    }
    return longest
};

describe('longestPalindrome', () => {
    test('test 1', () => {
        expect(longestPalindrome('caba')).toEqual('aba')
    })
    test('test 2', () => {
        expect(longestPalindrome('abcda')).toEqual('a')
    })
})
