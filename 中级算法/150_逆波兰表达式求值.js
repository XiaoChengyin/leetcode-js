/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const result = []

    while (tokens.length) {
        const token = tokens.shift()
        if (/\d/.test(token)) {
            result.push(token)
        } else {
            const tmp1 = result.pop()
            const tmp2 = result.pop()
            let value
            switch (token) {
                case '+':
                    value = +tmp2 + +tmp1
                    break
                case '-':
                    value = +tmp2 - +tmp1
                    break
                case '*':
                    value = +tmp2 * +tmp1
                    break
                case '/':
                    value = +tmp2 / +tmp1
                    break
            }
            value = value > 0 ? Math.floor(value) : Math.ceil(value)
            result.push(value)
        }
    }
    return result.pop()
};

describe('evalRPN', () => {
    test('test 1', () => {
        expect(evalRPN(["4","13","5","/","+"])).toEqual(6)
    })
    test('test 2', () => {
        expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toEqual(22)
    })
    test('test 3', () => {
        expect(evalRPN(["4","-2","/","2","-3","-","-"])).toEqual(-7)
    })
})
