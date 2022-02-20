function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * 通过bfs得到的数组生成二叉树
 * @param {array} bfsQueue
 * @param {function} TreeNode
 */
const genTreeByBFSQueue = exports.genTreeByBFSQueue = (bfsQueue) => {
    if (!bfsQueue.length) return null
    const head = new TreeNode(bfsQueue.shift())
    const nodeQueue = [head]
    while (bfsQueue.length) {
        const node = nodeQueue.shift()
        const leftValue = bfsQueue.shift()
        if (leftValue != null) {
            node.left = new TreeNode(leftValue)
            nodeQueue.push(node.left)
        }
        const rightValue = bfsQueue.shift()
        if (rightValue != null) {
            node.right = new TreeNode(rightValue)
            nodeQueue.push(node.right)
        }
    }
    return head
}

const bfsTree = exports.bfsTree = head => {
    if (!head) return []
    const queue = [head]
    const result = []
    while (queue.length) {
        const node = queue.shift()
        result.push(node.val)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
    return result
}

describe('genTreeByBFSQueue', () => {
    test('1', () => {
        const bfsQueue = [1, 2, 3, 4]
        expect(bfsTree(genTreeByBFSQueue(bfsQueue.slice()))).toEqual(bfsQueue)
    })
    test('2', () => {
        const bfsQueue = [1, 0, 3, 4, null, 5, 6, null]
        expect(bfsTree(genTreeByBFSQueue(bfsQueue.slice())))
            .toEqual(bfsQueue.filter(v => v != null))
    })
})

