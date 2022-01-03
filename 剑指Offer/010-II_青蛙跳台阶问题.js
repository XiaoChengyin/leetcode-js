/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    const cache = [1n, 1n, 2n, 3n]
    if (n < 4) return Number(cache[n])
    let i = 5
    while (i <= n) {
        cache[i] = cache[i - 1] + cache[i - 2]
        i++
    }
    return Number(cache[n] % BigInt(1e9 + 7))
};
