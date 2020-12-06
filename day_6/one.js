module.exports = function(input) {
    let passengerForms = input.split(/\n\s*\n/);
    let total = 0;
    for (let answerGroup of passengerForms) {
        let form = answerGroup.split(/\n/);
        let formChoices = {};
        let uniqueAnswers = 0;
        for (let formAnswers of form) {
            for (let answer of formAnswers.trim()) 
              if (!formChoices[answer]) {
                  formChoices[answer] = 1;
                  uniqueAnswers+=1;
              }
        }
        total += uniqueAnswers;
    }
    return total;
}