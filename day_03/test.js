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
    const slopes = [[1,1],[3,1],[5,1], [7,1],[1,2]];
    it("should return the number of #s on the path of slope right 3, down 1: 7", ()=>{
        assert.strictEqual(two(input, [[3,1]]), 7);
    });
    it("should return the number of #s on the path of slope right 1, down 2: 2", ()=>{
        assert.strictEqual(two(input, [[1,2]]), 2);
    });
    it("should return the number of #s on the path of slope right 1, down 1: 2", ()=>{
        assert.strictEqual(two(input, [[1,1]]), 2);
    });
    it("should return the product of the array of slopes provided: 336",()=>{
        assert.strictEqual(two(input, slopes), 336);
    });
});