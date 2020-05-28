/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const cache = (() => {
        const hash = {}
        return (x, y, paths) => {
            const key = `${x}_${y}`
            if (paths) hash[key] = paths
            return hash[key]
        }
    })()
    const go = (x, y) => {
        const cached = cache(x, y)
        if (cached) return cached
        if (x === m - 1 || y === n - 1) return cache(x, y, 1)
        return go(x + 1, y) + go(x, y + 1)
    }
    return go(0, 0)
};

describe('uniquePaths', () => {
    test('test 1', () => {
        expect(uniquePaths(3, 2)).toEqual(3)
    })
})
