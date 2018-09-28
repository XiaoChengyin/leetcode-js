/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === i && s.indexOf(s[i], i+1) === -1){
            return s.indexOf(s[i])
        }
    }
    return -1
};