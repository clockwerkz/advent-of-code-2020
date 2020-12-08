module.exports = function(input) {
    const code = input.split('\n').map(el=> el.trim());
    let switches = code.reduce((acc, el, i)=> el.includes("nop") || el.includes("jmp") ? acc.concat([i]): acc, []);
    let acc = processCode(code);
    while (acc === -1 && switches.length > 0) {
        let switchLocation = switches.shift();
        let modifiedCode = code.map((el, i)=>{
            if (i == switchLocation) {
                if (el.includes("nop")) {
                    return el.replace("nop", "jmp");
                } else {
                    return el.replace("jmp","nop");
                }
            }
            return el;
        })
        acc = processCode(modifiedCode);
        if (acc > -1) return acc;
    } 
    return acc;
}

function processCode(code) {
    const repeatedCode = [];
    let acc = 0;
    let i = 0;
    while (i < code.length) {
        if (repeatedCode.indexOf(i) !== -1) {
            return -1;
        }
        repeatedCode.push(i);
        let [ instruction, val ] = code[i].split(' ');
        switch (instruction) {
            case "acc":
                acc += parseInt(val);
                i++;
                break;
            case "jmp":
                let jmpInstruction = parseInt(val);
                i+=jmpInstruction;
                break;
            case "nop":
            default:
                i++;
        }
    }
    return acc;
}