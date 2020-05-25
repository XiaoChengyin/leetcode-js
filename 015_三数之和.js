/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    let len = nums.length
    if (len < 3) return result
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let l = i + 1
        let r = len - 1
        let sum
        while (l < r) {
            sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]])
                while (nums[l + 1] === nums[l]) {
                    l++
                }
                l++
            } else if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            }
        }
    }
    return result
};
