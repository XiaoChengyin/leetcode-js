/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let row = (prevRow, rowNo) => {
        let arr = []
        for(let i = 0; i < rowNo; i++){
            if(i === 0 || i === rowNo - 1){
                arr.push(1)
            } else {
                arr.push(prevRow[i - 1] + prevRow[i])
            }
        }
        return arr
    }
    if(numRows === 0) return []
    if(numRows === 1) return [[1]]
    let result = [[1]]
    for(let i = 2; i <= numRows; i++){
        result.push(row(result[i - 2], i))
    }
    return result
};
