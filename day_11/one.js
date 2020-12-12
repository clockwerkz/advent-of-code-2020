module.exports = function(input) {
    const prevRows = input.split('\n').map(el => el.trim().split(''));
    const rows = []
    let seats = 0;
    for (let i= 0; i < prevRows.length; i++) {
        rows.push([]);
        for (let j = 0; j < prevRows[i].length; j++) {
            switch (prevRows[i][j]) {
                case "L":
                    
                    let leftSide = j == 0 ? '.' : prevRows[i][j-1];
                    let rightSide = j <= prevRows[i].length - 1 ? '.': prevRows[i][j+1];
                    if ((leftSide == 'L' || leftSide == '.') && (rightSide == 'L' || rightSide == '.')) {
                        rows[i].push('#');
                    }
                    break;
                case '.':
                    rows[i].push('.');
                    break;
            }
        }
        console.log(rows[i].join(''));
    }
    return seats;
}
