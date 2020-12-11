module.exports = function(group){
    const form = group.split(/\n/).map(el => el.trim());
    let answerCheck= form[0].trim().split('');
    for (let formAnswers of form.slice(1)) {
        for (ltr of answerCheck) {
            if (formAnswers.indexOf(ltr)==-1) {
                answerCheck = answerCheck.filter(el => el !== ltr);
            }
        }
    }
    return answerCheck.length;
}