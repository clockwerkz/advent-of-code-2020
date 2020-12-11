const assert = require('assert');

const one = require("./one");
const two = require("./two");

describe("Day 10 - Part 1",()=>{
    const input =`28
    33
    18
    42
    31
    14
    46
    20
    48
    47
    24
    23
    49
    45
    19
    38
    39
    11
    1
    32
    25
    35
    8
    17
    7
    9
    4
    2
    34
    10
    3`;
    const answer = 22 * 10;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(one(input), answer);
    });
});

describe("Day 10 - Part 2",()=>{
    const answer = 0;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(two(), answer);
    });
});