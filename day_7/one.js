
function findParentBags(bags, bagName) {
    let parentBag = [];
    const keys = Object.keys(bags);
    for (key of keys) {
        if (bags[key].indexOf(bagName) !== -1) {
            parentBag.push(key);
        }
    }
    console.log(parentBag);
    parentCount = parentBag.length;
    console.log(parentCount);
    let currentBag = "";
    const bagsSearched = [];
    while (parentBag.length > 0) {
        currentBag = parentBag.shift();
        bagsSearched.push(currentBag);
        for (key of keys) {
            if (bags[key].indexOf(currentBag) !== -1 && parentBag.indexOf(key)=== -1 && bagsSearched.indexOf(key) === -1) {
                parentBag.push(key);
                parentCount++;
            }
        }
    }
    return parentCount;
}
//Guessed 241 and it's too high
module.exports = function(input, bag) {
    const bags = {};
    for (let line of input.split('\n')) {
        let parent = line.match(/[a-z]+\s[a-z]+\sbags/i)[0].replace('bags','').trim();
        let children = line.match(/[0-9]\s[a-z]+\s[a-z]+/ig);
        if (children) bags[parent] = children.map(el => el.replace(/[0-9]+\s/i, ""));
    }
    return findParentBags(bags, bag);
}