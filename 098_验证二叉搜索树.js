/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const arr = []
    const search = root => {
        if (root.left) search(root.left)
        arr.push(root.val)
        if (root.right) search(root.right)
    }
    if (!root) return true
    search(root)
    let last = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= last) return false
        last = arr[i]
    }
    return true
};
