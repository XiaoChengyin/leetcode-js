/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = new Set()
    const cols = new Set()
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 0) {
                rows.add(i)
                cols.add(j)
            }
        }
    }
    for (let r of rows) {
        for (let idx = 0; idx < matrix[r].length; idx++) {
            matrix[r][idx] = 0
        }
    }
    for (let c of cols) {
        for (let idx = 0; idx < matrix.length; idx++) {
            matrix[idx][c] = 0
        }
    }
};
