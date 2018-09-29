/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 0
    let res = ''
    let loop = true
    if(strs.length === 0){
        return res
    }
    while(loop){
        let c = strs[0][i]
        let isSame = strs.every(val => {
            if(!val[i]){
                loop = false
                return false
            }
            return val[i] === c
        })
        if(isSame){
            res += c
            i++
        } else {
            loop = false
        }
    }
    return res
};