const assert = require('assert');

const one = require("./one");
const two = require("./two");

describe("Day 6 - Part 1",()=>{
    it("should correctly identify the collective answers of each group and total them up: 11",()=>{
        const input = `abc

        a
        b
        c
        
        ab
        ac
        
        a
        a
        a
        a
        
        b`;
        assert.strictEqual(one(input), 11);
    });
});

describe("Day 6 - Part 2",()=>{
    const input = `abc

        a
        b
        c
        
        ab
        ac
        
        a
        a
        a
        a
        
        b`;
    const correctAnswer = 5;
    it(`should only add up the answers everyone has in common: ${correctAnswer}`,()=>{
        
        assert.strictEqual(two(input), correctAnswer);
    });
});