/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = []
    nums1.forEach(n => {
        const idx = nums2.indexOf(n)
        if (idx > -1) {
            result.push(n)
            nums2.splice(idx, 1)
        }
    })
    return result
};
