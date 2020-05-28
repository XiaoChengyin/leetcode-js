/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 1
        else map[nums[i]]++
    }

    const fill = (color, count) => {
        for (let i = 0; i < count; i++) {
            nums[idx++] = color
        }
    }
    let idx = 0
    fill(0, map[0])
    fill(1, map[1])
    fill(2, map[2])
};
