/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let middle = Math.floor((start + end) / 2)
    if (target === nums[start]) {
        return start
    } else if (target === nums[end]) {
        return end
    } else if (target > nums[start]) {
        // 目标值在左序列
        while (end - start > 1) {
            while (nums[middle] < nums[start] && end - start > 1) {
                end = middle
                middle = Math.floor((start + end) / 2)
            }
            if (nums[middle] > target) {
                end = middle
                middle = Math.floor((start + end) / 2)
            } else if (nums[middle] < target) {
                start = middle
                middle = Math.floor((start + end) / 2)
            } else {
                return middle
            }
        }
    } else if (target < nums[end]) {
        // 目标值在右序列
        while (end - start > 1) {
            while (nums[middle] > nums[end] && end - start > 1) {
                start = middle
                middle = Math.floor((start + end) / 2)
            }
            if (nums[middle] > target) {
                end = middle
                middle = Math.floor((start + end) / 2)
            } else if (nums[middle] < target) {
                start = middle
                middle = Math.floor((start + end) / 2)
            } else {
                return middle
            }
        }
    }

    return -1
};

describe('search', () => {
    test('test 1', () => {
        expect(search([1, 3], 1)).toEqual(0)
    })
})
