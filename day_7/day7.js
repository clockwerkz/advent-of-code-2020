const fs = require('fs');

const one = require("./one");
const two = require("./two");

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log(one(data, "shiny gold"));
    //console.log(two(data));
});