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
    let input2 =  '7-8 p pppppbvpc';
    let input3 = '3-4 f rcbf';
    it("should return 1 for 1-3 a: abcde, provided letter is only at the first position", ()=>{
        assert.strictEqual(two(input1), 1);
    });
    it("should return 1 for 7-8 p pppppbvpc, p appears only in position 8", ()=>{
        assert.strictEqual(two(input2), 1);
    });
    it("should return 1 for 3-4 f rcbf, f appears only in position 4", ()=>{
        assert.strictEqual(two(input3), 1);
    });
});