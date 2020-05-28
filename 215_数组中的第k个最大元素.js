/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pos = 0
    const len = nums.length
    if (len < 2) return nums[0]
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                const tmp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = tmp
                pos = j
            }
        }
        if (len - pos - 1 >= k) {
            return nums[len - k]
        }
    }
    return nums[len - k]
};

describe('findKthLargest', () => {
    test('test 1', () => {
        expect(findKthLargest([2, 1], 2)).toEqual(1)
    })
})
