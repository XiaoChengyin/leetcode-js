/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    const backtrack = (sub, rest) => {
        result.push(sub)
        rest.forEach((n, i) => {
            backtrack([...sub, n], rest.slice(i + 1))
        })
    }

    backtrack([], nums)
    return result
};
