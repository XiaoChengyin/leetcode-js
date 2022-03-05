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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const queue = [{node: root, deep: 1}]
    let tmp = []
    const result = []
    let currentDeep = 1

    while (queue.length) {
        const {node, deep} = queue.shift()
        if (currentDeep === deep) {
            tmp.push(node.val)
        } else {
            currentDeep++
            result.push(
                tmp.reduce((sum, item) => sum + item) / tmp.length
            )
            tmp = [node.val]
        }
        node.left && queue.push({node: node.left, deep: deep + 1})
        node.right && queue.push({node: node.right, deep: deep + 1})
    }
    result.push(
        tmp.reduce((sum, item) => sum + item) / tmp.length
    )
    return result
};
