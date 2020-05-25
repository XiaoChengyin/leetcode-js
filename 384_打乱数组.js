/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this._origin = nums.slice()
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this._origin.slice()
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const random = max => Math.floor(Math.random() * max)
    const origin = this._origin.slice()
    const result = []
    const len = origin.length
    for (let i = 0; i < len; i++) {
        const idx = random(origin.length)
        result.push(origin[idx])
        origin.slice(idx, 1)
    }
    return result
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
