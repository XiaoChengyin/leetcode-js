/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let len = nums.length
    if(len === 0) return null
    if(len === 1) return new TreeNode(nums[0])
    let middle = Math.floor((len - 1) / 2)
    let root = new TreeNode(nums[middle])
    root.left = sortedArrayToBST(nums.slice(0, middle))
    root.right = sortedArrayToBST(nums.slice(middle + 1))
    return root
};