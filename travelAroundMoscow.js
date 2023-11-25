'use strict'
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let string = lines[0];

    function travelAroundMoscow(str) {
        let strToArr = str.split(' ').map(Number);
        let xA = strToArr[0];
        let yA = strToArr[1];
        let xB = strToArr[2];
        let yB = strToArr[3];
        let angelA = Math.atan2(yA, xA);
        let angelB = Math.atan2(yB, xB);

        if (angelA < 0) {
            angelA = 2 * 6.283185307179586 + angelA;
        }
        if (angelB < 0) {
            angelB = 2 * 6.283185307179586 + angelB;
        }

        let differenceAngles = Math.abs(angelA - angelB);

        let distanceA = (Math.sqrt(xA ** 2 + yA ** 2));
        let distanceB = (Math.sqrt(xB ** 2 + yB ** 2));

        let distance = 0;
        if (distanceA > distanceB) {
            distance += distanceB * differenceAngles;
            distance += (distanceA - distanceB);
        } else {
            distance += distanceA * differenceAngles;
            distance += (distanceB - distanceA);
        }

        let distCentre = distanceA + distanceB;

        if (xA == xB && yA == yB) {
            return 0;
        }
        return Math.min(distCentre, distance);
    }

    let result = travelAroundMoscow(string);
    process.stdout.write(String(result));
});