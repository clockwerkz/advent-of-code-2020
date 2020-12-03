module.exports = function(input) {
    const matrix = input.split('\n').map(el => el.trim());
    let cols = matrix[0].length;
    let colPosition = 0;
return matrix.slice(1).reduce((treeCount, row) => {
        colPosition = (colPosition + 3) % cols;
        return row[colPosition] == "#" ? treeCount+1 : treeCount
    },0);
}

