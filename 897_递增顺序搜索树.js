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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const queue = []
    const travel = node => {
        if (!node) return false
        travel(node.left)
        queue.push(node)
        travel(node.right)
    }
    travel(root)
    queue.push(null)
    for (let i = 0; i < queue.length - 1; i++) {
        const node = queue[i]
        node.left = null
        node.right = queue[i + 1]
    }
    return queue[0]
};
