function countTotalBags(bags, bagName) {

    function countBags(bagName) {
        if (!Array.isArray(bags[bagName])) return 1;
        const arr = bags[bagName];
        let results = 1;
        for (bag of arr) {
            let regex = /[0-9]+\s/i;
            let bagCount = parseInt(bag.match(regex)[0]);
            bag = bag.replace(regex, '');
            results += (bagCount * (countBags(bag, bagCount)));
        }
        return results;
    }
    return countBags(bagName) - 1;
}

module.exports = function(input, bag) {
    const bags = {};
    for (let line of input.split('\n')) {
        let parent = line.match(/[a-z]+\s[a-z]+\sbags/i)[0].replace('bags','').trim();
        if (line.includes("no other bags.")) {
            bags[parent] = "no other bags."
        } else {
            let children = line.match(/[0-9]\s[a-z]+\s[a-z]+/ig);
            bags[parent] = children;
        }

    }
    return countTotalBags(bags, bag);
}