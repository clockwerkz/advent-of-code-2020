const assert = require('assert');
const { isMainThread } = require('worker_threads');
const one = require('./one');

describe("Day 1 - Part 1", ()=>{
    const test = "test";
    it("sets up testing", ()=>{
        assert(test).equals("test");
    })
});
let input = `1721
979
366
299
675
1456`;
