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
var minDiffInBST = function(root) {
    let min = Number.MAX_SAFE_INTEGER
    const queue = []
    const travel = node => {
        if (!node) return false
        travel(node.left)
        queue.push(node.val)
        travel(node.right)
    }
    travel(root)
    for (let i = 0; i < queue.length - 1; i++) {
        const diff = queue[i + 1] - queue[i]
        min = Math.min(min, diff)
    }
    return min
};
