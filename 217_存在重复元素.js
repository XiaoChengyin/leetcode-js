/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let length = Array.from(new Set(nums)).length
    return length !== nums.length
};