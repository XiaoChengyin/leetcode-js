/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let last = 0
    let now = 0
    nums.map(v => {
        [last, now] = [now, Math.max(last + v, now)]
    })
    return now
};
