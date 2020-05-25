/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[i] < nums[j]) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[j] < nums[k]) return true
                }
            }
        }
    }
    return false
};
