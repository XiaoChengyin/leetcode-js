/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    const generate = (str, left, right) => {
        if (str.length === n * 2) return result.push(str)

        if (left < n) {
            generate(str + '(', left + 1, right)
        }

        if (left > right) {
            generate(str + ')', left, right + 1)
        }
    }
    generate('(', 1, 0)
    return result
};
