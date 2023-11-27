const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let string1 = lines[1];
    let string2 = lines[2];

    const partition = (str1, str2) => {
        let minX = 0;
        let equalOrMaxX = 0;
        if (str1 === '') {
            return String(minX + '\n' + equalOrMaxX);
        }
        let arr = str1.split(' ').map(Number);
        let el = +str2;
        let E = 0;
        let N = 0;
        let G = 0;

        if (arr[0] < el) {
            E++;
            N++;
            G++;
            minX++;
        }
        if (arr[0] === el) {
            N++;
            G++;
            equalOrMaxX++;
        }
        if (arr[0] > el) {
            N++;
            equalOrMaxX++
        }

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < el && arr[i - 1] > arr[i]) {
                let now = arr[i];
                arr[N] = arr[G];
                arr[G] = arr[E];
                arr[E] = now;
                E++;
                N++;
                G++;
                minX++;
                continue;
            }
            if (arr[i] < el && arr[i - 1] <= arr[i]) {
                N++;
                G++;
                minX++;
                continue;
            }
            if (arr[i] === el && arr[i - 1] > arr[i]) {
                let now = arr[i];
                arr[N] = arr[G];
                arr[G] = now;
                N++;
                G++;
                equalOrMaxX++;
                continue;
            }
            if (arr[i] === el && arr[i - 1] <= arr[i]) {
                N++;
                equalOrMaxX++;
                continue;
            }
            if (arr[i] > el) {
                N++;
                equalOrMaxX++;
                continue;
            }
        }
        return String(minX + '\n' + equalOrMaxX);
    };

    let result = partition(string1, string2);
    process.stdout.write(result);
});