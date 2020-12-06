module.exports = function(input) {
    let passengerForms = input.split(/\n\s*\n/);
    let total = 0;
    let oneAnswerGroups = 1;
    for (let answerGroup of passengerForms) {
        const form = answerGroup.split(/\n/).map(el => el.trim());
        const answerKey = form[0].split('').reduce((acc, el)=> ({ ...acc, [el]:1 }),{});
        let uniqueAnswers = true;
        for (let formAnswers of form.slice(1)) {
            if (formAnswers.length === form[0].length) {
                for (let answer of formAnswers) {
                    if (!answerKey[answer]) uniqueAnswers = false;
                }
            } else {
                uniqueAnswers = false;
            }
        }
        console.log(total);
        if (uniqueAnswers) console.log(form[0], form[0].length);
        total += form.length=== 1 ? form[0].length : uniqueAnswers ? form[0].length : 0;
    }
    return total;
}