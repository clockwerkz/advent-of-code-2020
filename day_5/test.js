const assert = require('assert');

const one = require("./one");
const two = require("./two");
const barDecoder = require("./barDecoder");

describe("Day 5 - Part 1",()=>{
    let [bar1, bar2, bar3, bar4 ]  = ["FBFBBFFRLR",'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];
    it("should decode the given bar FBFBBFFRLR to seat ID: 357",()=>{
        assert.strictEqual(barDecoder(bar1), 357);
    });
    it("should decode the given bar BFFFBBFRRR to seat ID: 567",()=>{
        assert.strictEqual(barDecoder(bar2), 567);
    });
    it("should decode the given bar FFFBBBFRRR to seat ID: 119",()=>{
        assert.strictEqual(barDecoder(bar3), 119);
    });
    it("should decode the given bar BBFFBBFRLL to be seat ID: 820",()=>{
        assert.strictEqual(barDecoder(bar4), 820);
    });
});

describe("Day 5 - Part 2",()=>{
    it("should return 0",()=>{
        assert.strictEqual(two(), 0);
    });
});