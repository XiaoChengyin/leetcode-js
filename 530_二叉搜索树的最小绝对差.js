/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let prev
    let diff = Number.MAX_SAFE_INTEGER
    const travel = root => {
        if (!root) return
        travel(root.left)
        if (prev != null) {
            diff = Math.min(diff, root.val - prev)
        }
        prev = root.val
        travel(root.right)
    }
    travel(root)
    return diff
};
