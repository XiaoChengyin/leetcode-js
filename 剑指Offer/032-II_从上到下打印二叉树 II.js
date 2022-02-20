/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = [root]
    const result = []
    while (queue.length) {
        const tmp = []
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            if (node) {
                tmp.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        tmp.length && result.push(tmp)
    }
    return result
};
