/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    for(var i = 0; i < k; i++){
        nums.unshift(nums.pop())
    }
};