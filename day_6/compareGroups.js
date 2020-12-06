module.exports = function(group){
    const form = group.split(/\n/).map(el => el.trim());
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
    console.log(form[0].length);
}