module.exports = (input) => {
    let total = 0;
    const instructions = input.split("\n");
    for (let instruction of instructions) {
        instruction = instruction.replace(":", "");
        const [ bounds, letter, pw ] = instruction.trim().split(' ');
        const [ low, high ] = bounds.split('-').map(str => parseInt(str)-1);
        let firstBound = (pw[low] == letter);
        let secondBound = (pw[high] == letter);
        if ((firstBound && !secondBound) || (!firstBound && secondBound)) {
            total++;
        } 
    }
    return total;
}