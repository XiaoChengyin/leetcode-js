/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next) return null
    let first = head
    let last = head
    for (let i = 0; i < n; i++) {
        first = first.next
    }
    while (first && first.next) {
        first = first.next
        last = last.next
    }
    if (!first) return head.next
    last.next = last.next.next
    return head
};
