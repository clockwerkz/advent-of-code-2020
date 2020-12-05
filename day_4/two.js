const validateField = require('./validateField');

module.exports = function(input) {
    //const fields = [ "byr","iyr","eyr","hgt","hcl","ecl","pid"];
    const fields = ["byr", "iyr", "eyr", "hgt"];
    let passports = input
            .split(/\n\s*\n/)
            .map(el => el.trim().replace("\n",""))
            .map(el => el.split(/\s+/))
            .map(passport => passport.reduce((obj, attrib)=>{
                    let [key, value] = attrib.split(":");
                    return {
                        ...obj,
                        [key] : value
                    }
            },{}));
    let total = passports.reduce((validPassports, current)=>{
        for (field of fields) {
            if (current[field]) {
                if (validateField(field, current[field])) continue; 
            } else {
                return validPassports;
            }
        }
        return validPassports++;
    },0);
    return total;
}