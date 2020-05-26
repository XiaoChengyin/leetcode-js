/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    const search = root => {
        if (root.left && root.right) {
            root.left.next = root.right
            root.right.next = root.next ? root.next.left : null
            search(root.left)
            search(root.right)
        }
    }
    if (!root) return root
    root.next = null
    search(root)
    return root
};
