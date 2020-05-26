/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const Node = function (pos) {
        this.pos = pos
        this.left = this.right = this.up = this.down = null
    }
    const mapTree = node => {
        const [r, c] = node.pos
        if (grid[r][c + 1] === '1' && !hash[`${r}_${c + 1}`]) {
            hash[`${r}_${c + 1}`] = true
            node.right = new Node([r, c + 1])
            mapTree(node.right)
        }
        if (grid[r + 1] && grid[r + 1][c] === '1' && !hash[`${r + 1}_${c}`]) {
            hash[`${r + 1}_${c}`] = true
            node.down = new Node([r + 1, c])
            mapTree(node.down)
        }
        if (grid[r - 1] && grid[r - 1][c] === '1' && !hash[`${r - 1}_${c}`]) {
            hash[`${r - 1}_${c}`] = true
            node.up = new Node([r - 1, c])
            mapTree(node.up)
        }
        if (grid[r][c - 1] === '1' && !hash[`${r}_${c - 1}`]) {
            hash[`${r}_${c - 1}`] = true
            node.left = new Node([r, c - 1])
            mapTree(node.left)
        }
    }
    const trees = []
    const hash = {}
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1' && !hash[`${i}_${j}`]) {
                hash[`${i}_${j}`] = true
                const node = new Node([i, j])
                trees.push(node)
                mapTree(node)
            }
        }
    }
    return trees.length
};
