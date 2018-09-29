/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'F': 4,
        'N': 9,
        'A': 40,
        'B': 90,
        'G': 400,
        'H': 900
    }
    let translateMap = {
        'IV': 'F',
        'IX': 'N',
        'XL': 'A',
        'XC': 'B',
        'CD': 'G',
        'CM': 'H'
    }
    for(let key in translateMap){
        s = s.replace(new RegExp(key, 'g'), translateMap[key])
    }
    let sum = 0
    s.split('').forEach((val) => sum += map[val])
    return sum
};