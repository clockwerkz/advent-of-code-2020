const assert = require('assert');
const one = require('./one');
const two = require('./two');
const validateFields = require('./validateField');

describe("Day 4 - Part 1",()=>{
    const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
    byr:1937 iyr:2017 cid:147 hgt:183cm

    iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
    hcl:#cfa07d byr:1929
    
    hcl:#ae17e1 iyr:2013
    eyr:2024
    ecl:brn pid:760753108 byr:1931
    hgt:179cm
    
    hcl:#cfa07d eyr:2025 pid:166559648
    iyr:2011 ecl:brn hgt:59in
    `;

    it("should return the number of valid passports: 2",()=>{
        assert.strictEqual(one(input), 2);
    });
});

describe("validateFields Helper function",()=>{
    it("it should return whether birth year falls in the range of 1920 to 2002 (1980): true",()=>{
        assert.strictEqual(validateFields("byr",1980), true);
    });
    it("it should return whether birth year falls in the range of 1920 to 2002 (2010): false",()=>{
        assert.strictEqual(validateFields("byr",2010), false);
    });
    it("it should return whether issue year falls in the range of 2010 to 2020 (2015): true",()=>{
        assert.strictEqual(validateFields("iyr",2015), true);
    });
    it("it should return whether issue year falls in the range of 2010 to 2020 (2000): false",()=>{
        assert.strictEqual(validateFields("iyr",2000), false);
    });
    it("it should return whether expiration year falls in the range of 2010 to 2020 (2020): false",()=>{
        assert.strictEqual(validateFields("eyr",2020), true);
    });
    it("it should return whether expiration year falls in the range of 2010 to 2020 (2032): false",()=>{
        assert.strictEqual(validateFields("eyr",2031), false);
    });
});

describe("Day 4 - Part 2", ()=> {
    const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
    byr:1937 iyr:2017 cid:147 hgt:183cm

    iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
    hcl:#cfa07d byr:1929
    
    hcl:#ae17e1 iyr:2013
    eyr:2024
    ecl:brn pid:760753108 byr:1931
    hgt:179cm
    
    hcl:#cfa07d eyr:2025 pid:166559648
    iyr:2011 ecl:brn hgt:59in
    `;
    const input2 = `byr:1980 iyr:2010 eyr:2022 hgt:70in
    byr:1980 iyr:2010 hgt:70in`;
    it("it should return 1",()=>{
        assert.strictEqual(two(input2), 1);
    });
});