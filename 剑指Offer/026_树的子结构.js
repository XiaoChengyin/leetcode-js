/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    const isSubTree = (A, B) => {
        if (!B) return true
        if (!A) return false
        let tmp = false
        if (A.val === B.val) {
            tmp = isSubTree(A.left, B.left) && isSubTree(A.right, B.right)
        }
        return tmp || isSubTree(A.left, B) || isSubTree(A.right, B)
    }
    if (!B) return false
    return isSubTree(A, B)
};

test('树的子结构', () => {
    const A = new TreeNode()
})
