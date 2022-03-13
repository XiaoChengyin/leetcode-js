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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const map = {}
    const queue = []
    const travel = node => {
        if (!node) return
        travel(node.left)
        map[node.val] = true
        queue.push(node.val)
        travel(node.right)
    }
    travel(root)
    for (let i = 0; i < queue.length; i++) {
        const val = queue[i]
        const target = k - val
        if (map[target] && val !== target) return true
    }
    return false
};
