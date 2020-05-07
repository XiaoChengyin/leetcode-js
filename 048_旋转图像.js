/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length
    const width = Math.floor(len / 2)
    const height = Math.ceil(len / 2)
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            const tmp = matrix[row][col]
            matrix[row][col] = matrix[len - col - 1][row]
            matrix[len - col - 1][row] = matrix[len - row - 1][len - col - 1]
            matrix[len - row - 1][len - col - 1] = matrix[col][len - row - 1]
            matrix[col][len - row - 1] = tmp
        }
    }

};
