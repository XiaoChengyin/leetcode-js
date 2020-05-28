/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const len = nums.length
    const result = []
    const backtrack = (arr, rest) => {
        if (arr.length === len) return result.push(arr)
        rest.forEach(num => {
            backtrack([...arr, num], rest.filter(n => n !== num))
        })
    }
    backtrack([], nums)
    return result
};
