/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) return null
    const result = head
    const evenHead = head.next
    let even
    while (head.next && head.next.next) {
        even = head.next
        head.next = head.next.next
        even.next = even.next.next
        head = head.next
    }
    head.next = evenHead
    return result
};
