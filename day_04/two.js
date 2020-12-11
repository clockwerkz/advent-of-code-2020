const validateField = require('./validateField');

module.exports = function(input) {
    const fields = [ "byr","iyr","eyr","hgt","hcl","ecl","pid"];
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
    passports = passports.reduce((validPassports, passport)=>{
        let isValid = true;
        for (let field of fields) {
            if (!passport[field]) isValid = false;
        }
        return isValid ? validPassports.concat([ passport ]) : validPassports
    },[]);
    let total = 0;
    for (passport of passports) {
        let isValid = true;
        for (field of fields) {
            if (!validateField(field, passport[field])) isValid = false;
        }
        if (isValid) {
            total++;
            if (passport["pid"] == "6533951177") console.log(passport);
        }
    }
    return total;
}