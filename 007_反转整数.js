/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isMinus = x < 0
    let rev = x.toString().replace('-', '').split('').reverse().join('').replace(/^0*/, '')
    let res = +(isMinus ? '-' + rev : rev)
    if(res < - Math.pow(2, 31) || res > Math.pow(2, 31) - 1){
        return 0
    } else {
        return res
    }
};