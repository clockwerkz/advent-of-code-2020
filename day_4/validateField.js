module.exports = function (field, input) {
    let validMeasurement = /\d+(in|cm)/;
    let validEyeColor = /(amb|blu|brn|gry|grn|hzl|oth)/;
    let validPID = /\d{9}/;
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
                let measurement = parseInt(input.match(/\d+/));
                let unit = input.match(/(cm|in)/);
                return unit == "cm" ? 
                measurement >= 150 && measurement <= 193 : measurement >= 59 && measurement <= 76;
            }
            return false;
    }
    return false;
}
