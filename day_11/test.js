const assert = require('assert');

const one = require("./one");
const two = require("./two");

describe("Day 11 - Part 1",()=>{
    const input = `L.LL.LL.LL
    LLLLLLL.LL
    L.L.L..L..
    LLLL.LL.LL
    L.LL.LL.LL
    L.LLLLL.LL
    ..L.L.....
    LLLLLLLLLL
    L.LLLLLL.L
    L.LLLLL.LL`;
    const answer = 0;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(one(input), answer);
    });
});

describe("Day 11 - Part 2",()=>{
    const answer = 0;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(two(), answer);
    });
});