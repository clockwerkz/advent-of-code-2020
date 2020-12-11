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
    it(`should the product of the total number of differences between 1 and 3 jolts: ${answer}`,()=>{
        assert.strictEqual(one(input), answer);
    });
});

describe("Day 10 - Part 2",()=>{
    input = `16
    10
    15
    5
    1
    11
    7
    19
    6
    12
    4`;
    const answer = 8;
    const input2 = `28
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
    const answer2 = 19208;
    it(`should return the number of permutations possible where each number is within 3: ${answer}`,()=>{
        assert.strictEqual(two(input), answer);
    });
    it(`should return the number of permutations possible where each number is within 3: ${answer2}`,()=>{
        assert.strictEqual(two(input2), answer2);
    });
});