module.exports = function (field, input) {
    let validMeasurement = /\d+(in|cm)/;
    let validEyeColor = /(amb|blu|brn|gry|grn|hzl|oth)/;
    let validPID = /\d{9}/;
    let validHairColor = /#[0-9a-f]{6}/i;
    let year;
    switch(field) {
        case "byr":
            year = parseInt(input);
            return  (year >= 1920 && year <= 2002);
        case "iyr":
            year = parseInt(input);
            return (year >= 2010 && year <= 2020);
        case "eyr":
            year = parseInt(input);
            return (year >= 2020 && year <= 2030);
        case "hgt":
            if (validMeasurement.test(input)) {
                let measurement = parseInt(input.match(/\d+/)[0]);
                let unit = input.match(/(cm|in)/)[0];
                return unit == "cm" ? 
                measurement >= 150 && measurement <= 193 : measurement >= 59 && measurement <= 76;
            }
            return false;
        case "hcl":
            return validHairColor.test(input);
        case "ecl":
            return validEyeColor.test(input);
        case "pid":
            return (validPID.test(input) && input.length<10);
    }
    return false;
}
