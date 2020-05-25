/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hash = new Map()
    while(headA){
        hash.set(headA, true)
        headA = headA.next
    }
    while(headB){
        if(hash.has(headB)) return headB
        headB = headB.next
    }
    return null
};
