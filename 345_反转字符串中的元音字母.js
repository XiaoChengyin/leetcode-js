/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let a = s.split('')
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let reverse = []
    a = a.map(c => {
        if (vowel.includes(c)) {
            reverse.push(c)
            return '_'
        }
        return c
    })
    return a.map(c => {
        if (c === '_') return reverse.pop()
        else return c
    }).join('')
};


// 更好的思路: 双指针
// class Solution(object):
//     def reverseVowels(self, s):
//         """
//         :type s: str
//         :rtype: str
//         """
//         a = list(s)
//         idx = 0
//         r_idx = len(a) - 1
//         yy_char = set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
        
//         while(idx<r_idx):
//             while a[idx] not in yy_char and idx < r_idx:
//                 idx += 1
//             while a[r_idx] not in yy_char and r_idx > idx:
//                 r_idx -= 1
//             a[idx], a[r_idx] = a[r_idx], a[idx]
//             idx += 1
//             r_idx -= 1
//         return "".join(a)
