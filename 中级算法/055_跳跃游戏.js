/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const cached = {}
    const go = (current) => {
        if (cached[current] != null) return cached[current]

        if (current === nums.length - 1) {
            cached[current] = true
            return cached[current]
        }
        for (let i = nums[current]; i > 0; i--) {
            const result = go(current + i)
            if (result) {
                cached[current] = true
                return cached[current]
            }
        }
        cached[current] = false
        return cached[current]
    }
    return go(0)
};
