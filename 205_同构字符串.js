/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const common = str => {
        let count = 1
        const map = {}
        const result = []
        str.split('').map(c => {
            if (!map[c]) {
                map[c] = count
                result.push(count)
                count++
            } else {
                result.push(map[c])
            }
        })
        return result.join('')
    }
    return common(s) === common(t)
};
