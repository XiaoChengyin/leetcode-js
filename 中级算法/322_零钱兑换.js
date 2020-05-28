/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const cache = (() => {
        const hash = {}
        return (amount, n) => {
            if (n) hash[amount] = n
            return hash[amount]
        }
    })()
    const dp = amount => {
        const cached = cache(amount)
        if (cached != null) return cached
        if (amount < 0) return Infinity
        if (amount === 0) return 0
        const result = coins.reduce((res, coin) => {
            return Math.min(dp(amount - coin) + 1, res)
        }, Infinity)
        return cache(amount, result)
    }
    const result = dp(amount)
    if (result === Infinity) return -1
    else return result
};
