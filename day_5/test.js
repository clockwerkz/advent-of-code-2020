const assert = require('assert');

const one = require("./one");
const two = require("./two");

describe("Day 5 - Part 1",()=>{
    it("should return 0",()=>{
        assert.strictEqual(one(), 0);
    });
});

describe("Day 5 - Part 2",()=>{
    it("should return 0",()=>{
        assert.strictEqual(two(), 0);
    });
});