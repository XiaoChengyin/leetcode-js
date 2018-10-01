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
var mergeTwoLists = function(l1, l2) {
    let l3 = null
    l1 = l1 || new ListNode(Infinity)
    l2 = l2 || new ListNode(Infinity)
    if(l1.val === Infinity && l2.val === Infinity){
        return null
    } else if(l1.val > l2.val){
        l3 = new ListNode(l2.val)
        l2 = l2.next || new ListNode(Infinity)
    } else {
        l3 = new ListNode(l1.val)
        l1 = l1.next || new ListNode(Infinity)
    }
    let res = l3
    while(!(l1.val === Infinity && l2.val === Infinity)){
        if(l1.val > l2.val){
            l3.next = new ListNode(l2.val)
            l2 = l2.next || new ListNode(Infinity)
        } else {
            l3.next = new ListNode(l1.val)
            l1 = l1.next || new ListNode(Infinity)
        }
        l3 = l3.next
    }
    return res
};