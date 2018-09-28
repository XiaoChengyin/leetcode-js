/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 判断数组除 '.' 外是否不重复
    let isValidArr = (arr) => {
        let s = arr.join('').replace(/\./g, '').split('')
        return s.length == Array.from(new Set(s)).length
    }
    // 给定坐标获取 3x3 数组
    let makeArr = (x, y) => {
        let arr = []
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                arr.push(board[x+i][y+j])
            }
        }
        return arr
    }
    for(let i = 0; i < 9; i++){
        // 行判断
        if(!isValidArr(board[i])) return false
        // 列判断
        let col = []
        for(let j = 0; j < 9; j++){
            col.push(board[j][i])
        }
        if(!isValidArr(col)) return false
    }
    // 3x3 判断
    for(let i = 0; i < 9; i += 3){
        for(let j = 0; j < 9; j += 3){
            if(!isValidArr(makeArr(i, j))) return false
        }
    }
    return true
};