/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    let prevRow = getRow(rowIndex - 1)
    let row = []
    for(let i = 0; i <= rowIndex; i++){
        if(i === 0 || i === rowIndex){
            row.push(1)
        } else {
            row.push(prevRow[i - 1] + prevRow[i])
        }
    }
    return row
};
