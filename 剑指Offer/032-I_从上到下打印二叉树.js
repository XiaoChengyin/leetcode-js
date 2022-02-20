/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    const queue = []
    const result = []
    queue.push(root)
    while (queue.length) {
        const node = queue.shift()
        if (node) {
            queue.push(node.left)
            queue.push(node.right)
            result.push(node.val)
        }
    }
    return result
};
