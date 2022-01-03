/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const map = new Map()
    return nums.find(num => {
        if (map.has(num)) return true
        map.set(num, true)
        return false
    })
};

test('数组中重复的数字', () => {
    const result = findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
    expect(result === 2 || result === 3).toBe(true)
})
