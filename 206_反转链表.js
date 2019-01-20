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
    if (!head) return null
    let current = head.next
    let prev = head
    prev.next = null
    while(current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};
