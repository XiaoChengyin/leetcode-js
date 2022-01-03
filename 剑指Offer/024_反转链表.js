/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const dp = (pre, node) => {
        if (!node) return pre
        const next = node.next
        node.next = pre
        return dp(node, next)
    }
    return dp(null, head)
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function(head) {
    let pre = null
    let node = head
    let next
    while (node) {
        next = node.next
        node.next = pre

        pre = node
        node = next
    }
    return pre
}
