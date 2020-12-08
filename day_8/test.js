const assert = require('assert');

const one = require("./one");
const two = require("./two");

describe("Day 8 - Part 1",()=>{
    const input = `nop +0
    acc +1
    jmp +4
    acc +3
    jmp -3
    acc -99
    acc +1
    jmp -4
    acc +6`;
    const answer = 5;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(one(input), answer);
    });
});

describe("Day 8 - Part 2",()=>{
    const answer = 0;
    it(`should return ${answer}`,()=>{
        assert.strictEqual(two(), answer);
    });
});