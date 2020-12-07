const assert = require('assert');

const one = require("./one");
const two = require("./two");
const compareGroups = require("./compareGroups");

describe("Testing compareGroups function",()=>{
    input=`abc
    a
    a
    bc`;
    const answer = 0;
    it(`Should match all letters and return: ${answer}`,()=>{
        assert.strictEqual(compareGroups(input), answer);
    });
});

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
    const correctAnswer = 6;
    it(`should only add up the answers everyone has in common: ${correctAnswer}`,()=>{
        
        assert.strictEqual(two(input), correctAnswer);
    });
});