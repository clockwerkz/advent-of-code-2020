const fs = require('fs');
const one = require('./one');
const two = require('./two');

const slopes = [[1,1],[3,1],[5,1], [7,1],[1,2]];

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log(one(data));
    console.log(two(data, slopes));
})