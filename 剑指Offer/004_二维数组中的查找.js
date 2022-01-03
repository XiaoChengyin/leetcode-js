/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    const rows = matrix.length
    if (rows === 0) return false
    const cols = matrix[0].length
    let r = 0
    let c = cols - 1
    while (r < rows && c >= 0) {
        // console.log(r, c)
        const value = matrix[r][c]
        if (value === target) {
            return true
        } else if (value > target) {
            c--
        } else {
            r++
        }
    }
    return false
};

test('二维数组中的查找', () => {
    const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
    const target = 20
    expect(findNumberIn2DArray(matrix, target)).toBe(false)
})
