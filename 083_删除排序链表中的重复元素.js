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
var deleteDuplicates = function(head) {
    let cache = {}
    let prev = null
    let res = head
    while(head){
        if(cache[head.val]){
            prev.next = head.next
            head = head.next
        } else {
            cache[head.val] = true
            prev = head
            head = head.next
        }
    }
    return res
};