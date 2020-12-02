module.exports = (input) => {
    let total = 0;
    const instructions = input.split("\n");
    for (let instruction of instructions) {
        instruction = instruction.replace(":", "");
        const [ bounds, letter, pw ] = instruction.trim().split(' ');
        const [ low, high ] = bounds.split('-').map(str => parseInt(str));
        let count = 0;
        for (let ltr of pw) {
            if (ltr == letter) count++;
        }
        if (count >= low && count <= high) {
            total++;
        }
    }
    return total;
}