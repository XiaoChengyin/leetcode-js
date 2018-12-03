/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.min = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    let min = this.getMin()
    if(min === undefined || min >= x){
        this.min.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.stack.pop()
    let min = this.getMin()
    if(val === min) this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
