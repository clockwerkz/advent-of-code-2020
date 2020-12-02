const assert = require("assert");
const one = require('./one');
const two = require('./two');




describe("Day 2 - Part 1", ()=>{  
    const input = `1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc`;
    it("should return 2 for the number of valid passwords where the key letter falls within the provided bounds", ()=>{
        assert.strictEqual(one(input), 2);
    });
});

describe("Day 2 - Part 2", ()=>{  
    let input1 = '1-3 a: abcde';
    let input2 =  '1-3 b: cdefg';
    let input3 = '2-9 c: ccccccccc';
    it("should return 1 for 1-3 a: abcde, provided letter is only at the first position", ()=>{
        assert.strictEqual(two(input1), 1);
    });
    it("should return 0 for 1-3 b: cdefg, neither position contains the provided letter", ()=>{
        assert.strictEqual(two(input2), 0);
    });
    it("should return 0 for 2-9 c: ccccccccc, both positions have the provided letter", ()=>{
        assert.strictEqual(two(input3), 0);
    });
});