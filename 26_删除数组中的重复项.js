/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var obj = {}
    for(var i = nums.length - 1; i >= 0; i--){
        if(obj[nums[i]]){
            nums.splice(i, 1)
        } else {
            obj[nums[i]] = true
        }
    }
    return nums.length
};