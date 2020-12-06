module.exports = function(input) {
    let passengerForms = input.split(/\n\s*\n/);
    let total = 0;
    let oneAnswerGroups = 1;
    for (let answerGroup of passengerForms) {
        const form = answerGroup.split(/\n/);
        const answerKey = form[0].trim().split('').reduce((acc, el)=> ({ ...acc, [el]:1 }),{});
        console.log(answerKey);
        let uniqueAnswers = 0;
        for (let formAnswers of form.slice(1)) {
            for (let answer of formAnswers.trim()) 
              if (answerKey[answer]) uniqueAnswers+=1;
        }
        total += form.length=== 1 ? 1 : uniqueAnswers;
    }
    return total;
}