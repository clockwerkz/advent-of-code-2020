const assert = require('assert');

const one = require("./one");
const two = require("./two");

describe("Day 7 - Part 1",()=>{
    const input = `posh crimson bags contain 2 mirrored tan bags, 1 faded red bag, 1 striped gray bag.
    bright gray bags contain 1 striped white bag, 4 vibrant cyan bags, 4 clear white bags, 4 muted gold bags.
    pale plum bags contain 1 dark silver bag.
    light tomato bags contain 5 plaid brown bags, 5 bright maroon bags, 5 shiny beige bags, 1 posh crimson bags.`;
    const correctAnswer = 2;
    it(`should return the number of bags that can hold shiny gold: ${correctAnswer}`,()=>{
        assert.strictEqual(one(input, 'mirrored tan'), correctAnswer);
    });
});

describe("Day 7 - Part 2",()=>{
    const input = `shiny gold bags contain 2 dark red bags.
    dark red bags contain 2 dark orange bags.
    dark orange bags contain 2 dark yellow bags.
    dark yellow bags contain 2 dark green bags.
    dark green bags contain 2 dark blue bags.
    dark blue bags contain 2 dark violet bags.
    dark violet bags contain no other bags.`;
    const correctAnswer = 126;
    it(`should calculate the total bag space for shiny gold: ${correctAnswer}`,()=>{
        assert.strictEqual(two(), correctAnswer);
    });
});