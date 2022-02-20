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
var findMode = function(root) {
    let base = root.val
    let count = 0
    let maxCount = 0
    let result = []
    const travel = root => {
        if (root.left) travel(root.left)
        if (base === root.val) {
            count++
        } else {
            if (count > maxCount) {
                result = [base]
                maxCount = count
            } else if (count === maxCount) {
                result.push(base)
            }
            base = root.val
            count = 1
        }
        if (root.right) travel(root.right)
    }
    travel(root)
    if (count > maxCount) {
        result = [base]
    } else if (count === maxCount) {
        result.push(base)
    }
    return result
};
