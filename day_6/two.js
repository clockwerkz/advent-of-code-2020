const compareGroups = require('./compareGroups');

module.exports = function(input) {
    let passengerForms = input.split(/\n\s*\n/);
    let total = 0;
    for (let answerGroup of passengerForms) {
        total += compareGroups(answerGroup);
    }
    return total;
}