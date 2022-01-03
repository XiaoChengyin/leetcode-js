var CQueue = function() {
    this.stackHead = []
    this.stackTail = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackTail.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stackHead.length) return this.stackHead.pop()

    while (this.stackTail.length) {
        this.stackHead.push(this.stackTail.pop())
    }

    return this.stackHead.pop() || -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
