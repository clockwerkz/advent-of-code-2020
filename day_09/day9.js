const fs = require('fs');

const one = require("./one");
const two = require("./two");

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if (err) {
        console.log(err);
        return;
    }
    let oneVal = one(data, 25);
    console.log(oneVal);
    console.log(two(data, oneVal));
});