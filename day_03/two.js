module.exports = function(input, slopes) {
    let totalTrees = 1;
    for (let slope of slopes) {
        const [ col, row ] = slope;
        const matrix = input.split('\n').map(el => el.trim());
        let cols = matrix[0].length;
        let colPosition = 0;
        let treeCount = 0;
        for (let i=row; i < matrix.length; i+=row) {
            colPosition = (colPosition + col) % cols;
            if (matrix[i][colPosition] == "#") treeCount++; 
        }
        totalTrees *= treeCount;
    }
    return totalTrees;
}