/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0]
    let map = {}
    let res = null
    nums.map(v => {
        if (!map[v]) {
            map[v] = 1
        } else {
            map[v]++
            if (map[v] > nums.length / 2) res = v
        }
    })
    return res
};
