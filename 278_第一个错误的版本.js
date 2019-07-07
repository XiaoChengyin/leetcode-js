/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0
        let end = n
        let middle = Number.parseInt(n / 2)
        while (true) {
            if (isBadVersion(middle)) {
                end = middle
                middle = Number.parseInt((start + end) / 2)
            } else {
                start = middle
                middle = Number.parseInt((start + end) / 2)
            }
            if (end - start === 2) {
                if (isBadVersion(middle)) {
                    return middle
                } else {
                    return end
                }
            } else if (end - start === 1) {
                return end
            }
        }
    };
};
