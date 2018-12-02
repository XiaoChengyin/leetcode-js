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
var hasCycle = function(head) {
    // 方法一: 哈希表
    // let hash = new Map()
    // while(head){
    //     if(!hash.has(head)){
    //         hash.set(head, true)
    //         head = head.next
    //     } else {
    //         return true
    //     }
    // }
    // return false

    // 方法二: 双指针
    if(!head) return false
    let fast = head.next
    let slow = head
    while(fast !== slow){
        if(!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
};
