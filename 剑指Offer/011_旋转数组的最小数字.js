/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    const min = numbers[0]
    return numbers.find(n => n < min) ?? min
};
