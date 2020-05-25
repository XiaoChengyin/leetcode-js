/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head && head.val === val) {
        head = head.next
    }
    if (!head) return null
    let last = head
    let node = last.next
    while (node) {
        if (node.val === val) {
            last.next = node.next
            node = last.next
        } else {
            last = node
            node = node.next
        }
    }
    return head
};
