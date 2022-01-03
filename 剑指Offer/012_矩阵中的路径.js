/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length
    const travel = (row, col, word, path = {}) => {
        const position = `${row}_${col}`
        if (path[[position]]) {
            return false
        } else if (!word.length) {
            return true
        } else {
            path[position] = true
            const results = []
            if (board[row - 1] && board[row - 1][col] === word[0]) {
                results.push(travel(row - 1, col, word.slice(1), path))
            }
            if (board[row + 1] && board[row + 1][col] === word[0]) {
                results.push(travel(row + 1, col, word.slice(1), path))
            }
            if (board[row][col - 1] === word[0]) {
                results.push(travel(row, col - 1, word.slice(1), path))
            }
            if (board[row][col + 1] === word[0]) {
                results.push(travel(row, col + 1, word.slice(1), path))
            }
            return results.some(Boolean)
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const letter = board[i][j]
            if (letter === word[0]) {
                if (travel(i, j, word.slice(1))) {
                    return true
                }
            }
        }
    }
    return false
};

describe('矩阵中的路径', () => {
    const board = [
        ["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]
    ]
    test('1', () => {
        expect(exist(board, "ABCCED")).toBe(true)
    })
    test('2', () => {
        expect(exist(board, "AB")).toBe(true)
    })
    test('3', () => {
        expect(exist([['a', 'a']], 'aaa')).toBe(false)
    })
    test('4', () => {
        const board = [
            ["A","B","C","E"],
            ["S","F","E","S"],
            ["A","D","E","E"]
        ]
        expect(exist(board, 'ABCESEEEFS')).toBe(true)
    })
})
