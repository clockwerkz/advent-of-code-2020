const fs = require('fs');
const one = require('./one');

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log(one(data));
})