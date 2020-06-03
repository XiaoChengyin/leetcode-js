/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const axis = []
    const result = []
    let tmp = []
    intervals.forEach(([start, end]) => {
        for (let i = start; i <= end; i++) {
            if (axis[i]) axis[i] = Math.max(axis[i], end)
            else axis[i] = end
        }
    })
    for (let i = 0; i < axis.length; i++) {
        if (tmp.length === 0 && axis[i] != null) {
            tmp[0] = i
            // eg. [0, 0] 开始即结束
            if (axis[i] === i) {
                tmp[1] = i
                result.push(tmp)
                tmp = []
            }
        } else if (tmp.length !== 0 && axis[i] === i) {
            tmp[1] = i
            result.push(tmp)
            tmp = []
        }
    }
    return result
};

describe('merge', () => {
    test('test 1', () => {
        expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]])
    })
})
