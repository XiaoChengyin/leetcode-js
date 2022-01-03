
// Definition for a Node.
function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};

// https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/fu-za-lian-biao-de-fu-zhi-by-leetcode-so-9ik5/

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const nodes = []
    const copiedNodes = []
    const copy = node => {
        if (!node) return
        const copied = new Node(node.val, null, null)
        nodes.push(node)
        copiedNodes.push(copied)
    }
    while (head) {
        copy(head)
        head = head.next
    }
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const copied = copiedNodes[i]
        const random = node.random
        copied.next = copiedNodes[i + 1] || null
        if (!random) {
            copied.random = null
        } else {
            const index = nodes.findIndex(n => n === random)
            copied.random = copiedNodes[index]
        }
    }
    return copiedNodes[0]
};

/**
 * @param {Node} head
 * @param {Map} cached
 * @return {Node}
 */
var copyRandomList2 = function(head, cached = new Map()) {
    if (!head) return null
    const node = new Node(head.val, null, null)
    cached.set(head, node)
    node.next = cached.has(head.next) ? cached.get(head.next) : copyRandomList2(head.next, cached)
    node.random = cached.has(head.random) ? cached.get(head.random) : copyRandomList2(head.random, cached)
    return node
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList3 = function(head) {
    if (!head) return null
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = new Node(node.val, node.next, null)
        node.next = nodeNew
    }
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = node.next
        nodeNew.random = node.random ? node.random.next : null
    }
    const headNew = head.next
    for (let node = head; node !== null; node = node.next) {
        const nodeNew = node.next
        node.next = node.next.next
        nodeNew.next = nodeNew.next ? nodeNew.next.next : null
    }
    return headNew
};


