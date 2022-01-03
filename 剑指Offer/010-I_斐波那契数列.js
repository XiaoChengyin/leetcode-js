/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const cache = [0n, 1n]
    let i = 2
    while (i <= n) {
        cache[i] = cache[i - 1] + cache[i - 2]
        i++
    }
    return Number(cache[n] % 1000000007n)
};

const fibArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

test('斐波那契数列', () => {
    expect(fib(5)).toBe(5)
    expect(fib(20)).toBe(6765)
    expect(fib(81)).toBe(107920472)
})
