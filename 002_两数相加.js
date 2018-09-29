/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode((l1.val + l2.val) % 10)
    let res = l3
    let cache = Math.floor((l1.val + l2.val) / 10)
    while(l1.next || l2.next || cache){
        l1 = l1.next || { val: 0, next: null }
        l2 = l2.next || { val: 0, next: null }
        l3.next = new ListNode((l1.val + l2.val + cache) % 10 )
        cache = Math.floor((l1.val + l2.val + cache) / 10)
        l3 = l3.next
    }
    return res
};