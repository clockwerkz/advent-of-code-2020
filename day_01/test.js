const assert = require('assert');
const one = require('./one');
const two = require('./two');

const input = `1721
    979
    366
    299
    675
    1456`.split('\n').map(el => parseInt(el));

describe("Day 1 - Part 1", ()=>{  
    it("should return the product of 1721 and 299: 514579", ()=>{
        assert.strictEqual(one(input), 514579);
    })
});

describe("Day 1 - Part 2", ()=> {
    it("should return the product of 1, 2, 3: 6",()=>{
        assert.strictEqual(two([1,2,3], 6), 6);
    });
    it("should return the product of 979, 366, and 675: 241861950.", ()=>{
        assert.strictEqual(two(input), 241861950);
    });
})

