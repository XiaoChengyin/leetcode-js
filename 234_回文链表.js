/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let q = []
    while(head){
        q.push(head.val)
        head = head.next
    }
    return q.join() === q.reverse().join()
};
