module.exports = function(input) {
    const matrix = input.split('\n').map(el => el.trim());
    let cols = matrix[0].length;
    let colPosition = 0;
    let treeCount = 0;
    for (let i=1; i < matrix.length; i++) {
        colPosition = (colPosition + 3) % cols;
        if (matrix[i][colPosition] == "#") treeCount++; 
    }
    return treeCount;
}