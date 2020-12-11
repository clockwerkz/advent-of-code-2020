const fs = require('fs');
const one = require('./one');
const two = require('./two');

fs.readFile('input.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const arr = data.split('\n').map(el => parseInt(el));
    console.log(one(arr));
    console.log(two(arr));
  });