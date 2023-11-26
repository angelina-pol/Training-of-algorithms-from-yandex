'use strict'
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let str = lines[0];

    function correctBracketSeq(str) {
        let stack = [];
        let open = ['{', '[', '('];
        let close = ['}', ']', ')'];
        if (str.length === 1) {
            return 'no';
        }
        if (open.indexOf(str[0]) === -1) {
            return 'no';
        }
        if (str.length % 2 !== 0) {
            return 'no';
        }
        if (str.length === 0) {
            return 'yes';
        }
        stack.push(str[0]);
        for (let i = 1; i < str.length; i++) {
            if (open.includes(str[i])) {
                stack.push(str[i]);
            } else if (close.includes(str[i]) && close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1])) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
        return stack.length === 0 ? 'yes' : 'no';
    }

    let result = correctBracketSeq(str);
    process.stdout.write(result);
});