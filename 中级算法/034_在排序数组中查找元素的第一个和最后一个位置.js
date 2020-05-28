/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let middle = Math.floor((start + end) / 2)
    while (end - start >= 0) {
        if (nums[middle] > target) {
            end = middle - 1
            middle = Math.floor((start + end) / 2)
        } else if (nums[middle] < target) {
            start = middle + 1
            middle = Math.floor((start + end) / 2)
        } else {
            let left = middle
            let right = middle
            while (nums[left - 1] === target) {
                left--
            }
            while (nums[right + 1] === target) {
                right++
            }
            return [left, right]
        }
    }
    return [-1, -1]
};

describe('searchRange', () => {
    test('test 1', () => {
        expect(searchRange([5,7,7,8,8,10], 8)).toEqual([3, 4])
    })
})
