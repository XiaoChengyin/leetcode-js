/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = []
    for (let i = 1; i <= n; i++) {
        const fizz = i % 3 === 0
        const buzz = i % 5 === 0
        const str = fizz ? (buzz ? 'FizzBuzz' : 'Fizz') : (buzz ? 'Buzz' : String(i))
        result.push(str)
    }
    return result
};
