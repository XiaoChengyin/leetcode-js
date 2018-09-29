/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = []
    for(let i = 0; i < s.length; i++){
        let c = map[s[i]]
        if(c){
            stack.push(s[i])
        } else if(s[i] !== map[stack.pop()]){
            return false
        }
    }
    return stack.length === 0
};