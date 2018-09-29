 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var map = {}
    for (let i = 0; i < nums.length; i++) {
      let n = nums[i]
      if (map[target - n] !== undefined) {
          return [map[target - n], i]
      } else {
          map[n] = i
      }
  }

};