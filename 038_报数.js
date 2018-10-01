/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1){
        return '1'
    } else {
        let prev = countAndSay(n - 1)
        let str = ''
        let count = 1
        let s = prev[0]
        for(let i = 1; i < prev.length; i++){
            if(s === prev[i]){
                count++
            } else {
                str += count + s
                s = prev[i]
                count = 1
            }
        }
        str += count + s
        return str
    }
};