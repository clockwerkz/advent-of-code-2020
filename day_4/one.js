module.exports = function(input) {
    const fields = [ "byr","iyr","eyr","hgt","hcl","ecl","pid"];
    return input
        .split(/\n\s*\n/)
        .map(el => el.trim()
        .reduce((validPassports, passport)=>{
            entries = passport.split(/\n*\s+/).map(el => el.split(":")[0]);
            let matchingFields = entries.reduce((matching, field) => fields.indexOf(field)!== -1 ? matching + 1 : matching, 0);
            return matchingFields == fields.length ? validPassports + 1 : validPassports;
        },0)
}