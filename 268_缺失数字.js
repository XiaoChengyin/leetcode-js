/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numsSet = new Set(nums)
    for (let i = 0; i < nums.length + 1; i++) {
        if (!numsSet.has(i)) return i
    }
    return null
};
