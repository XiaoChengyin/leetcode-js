/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.queue = nums.sort((a, b) => a - b)
    this.queue = this.queue.slice(-k)
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.queue = [...this.queue, val].sort((a, b) => a - b)
    this.queue = this.queue.slice(-this.k)
    return this.queue.length < this.k ? null : this.queue[0]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
