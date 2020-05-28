/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 1
        else map[nums[i]]++
    }
    const result = Object.entries(map).sort((a, b) => {
        return b[1] - a[1]
    })
    return result.slice(0, k).map(a => a[0])
};
