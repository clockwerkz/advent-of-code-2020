const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe("Day 3 - Part 1", ()=>{  
    const input = `..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#`;
    it("should return the number of #s on the path of slope right 3, down 1: 7", ()=>{
        assert.strictEqual(one(input), 7);
    });
});

describe("Day 3 - Part 2", ()=>{  
    const input = `..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#`;
    it("should return the number of #s on the path of slope right 3, down 1: 7", ()=>{
        assert.strictEqual(two(input), 7);
    });
});