module.exports = function(input) {
    const repeatedCode = [];
    const code = input.split('\n').map(el=> el.trim());
    let acc = 0;
    let i = 0;
    while (i < code.length) {
        if (repeatedCode.indexOf(i) !== -1) {
            console.log(code[i]);
            return acc;
        }
        repeatedCode.push(i);
        console.log(i, code[i]);
        let [ instruction, val ] = code[i].split(' ');
        switch (instruction) {
            case "acc":
                acc += parseInt(val);
                i++;
                break;
            case "jmp":
                let jmpInstruction = parseInt(val);
                i+=jmpInstruction;
                // if (repeatedCode[i + jmpInstruction]) {
                //     i++; 
                // } else {
                    
                // }
                break;
            case "nop":
            default:
                i++;
        }
    }
    return acc;
}