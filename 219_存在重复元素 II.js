/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    return nums.some((v, i) => {
        let limit = i + k
        return nums.slice(i + 1, limit + 1).some(n => n === v)
    })
};

var containsNearbyDuplicate = function(nums, k) {
    const record = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (record.has(nums[i])) {
            return true
        }
        
        record.add(nums[i])
        
        if (record.size === k + 1) {
            record.delete(nums[i-k])
        }
    }
    return false
};
