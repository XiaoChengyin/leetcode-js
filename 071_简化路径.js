/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const paths = path.slice(1).split('/')
    const stack = []

    for (let i = 0; i < paths.length; i++) {
        if (paths[i] === '' || paths[i] === '.') {
            continue
        } else if (paths[i] === '..') {
            stack.pop()
        } else {
            stack.push(paths[i])
        }
    }

    const result = '/' + stack.join('/')

    return result
};

describe('simplifyPath', () => {
    test('test 1', () => {
        expect(simplifyPath("/a/./b/../../c/")).toEqual("/c")
    })
})
