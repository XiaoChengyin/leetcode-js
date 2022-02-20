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
    let queue = [root]
    let depth = 0
    const result = []
    while (queue.length) {
        depth++
        const arr = queue.reverse()
        queue = []
        const tmp = []
        const len = arr.length
        for (let i = 0; i < len; i++) {
            const node = arr.shift()
            if (node) {
                tmp.push(node.val)
                if (depth % 2 === 1) {
                    queue.push(node.left)
                    queue.push(node.right)
                } else {
                    queue.push(node.right)
                    queue.push(node.left)
                }
            }
        }
        tmp.length && result.push(tmp)
    }
    return result
};
