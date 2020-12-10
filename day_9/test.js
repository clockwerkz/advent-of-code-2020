const assert = require('assert');

const one = require("./one");
const two = require("./two");

describe("Day 9 - Part 1",()=>{
    const input = `35
    20
    15
    25
    47
    40
    62
    55
    65
    95
    102
    117
    150
    182
    127
    219
    299
    277
    309
    576`;
    const answer = 127;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(one(input, 5), answer);
    });
});

describe("Day 9 - Part 2",()=>{
    const input = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const total = 18;
    const answer = [3,5];
    it(`should return ${answer}`,()=>{
        assert.deepStrictEqual(two(input, total), answer);
    });
});