module.exports = function(input) {
    const repeatedCode = {};
    const code = input.split('\n').map(el=> el.trim());
    let acc = 0;
    let i = 0;
    while (true) {
        if (repeatedCode[i]) {
            return acc;
        }
        repeatedCode[i] = 1;
        let [ instruction, val ] = code[i].split(' ');
        switch (instruction) {
            case "acc":
                acc += parseInt(val);
                i++;
                break;
            case "jmp":
                i+=parseInt(val);
                break;
            case "nop":
            default:
                i++;
        }
    }
    return 0;
}