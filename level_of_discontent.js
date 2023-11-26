'use strict'
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin;
});
let lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  let string = lines[1];

	function levelOfdiscontent(str) {
  		let strToArr = str.split(' ').map(Number);
  		let arrOfdiscontent = [];
  		let sum = 0;
  		for (let i = 1; i < strToArr.length; i++) {
    		sum = sum + strToArr[i];
  		}
  		let sumOfLeft = 0;
  		let sumOfRight = sum;
  		for (let i = 0; i < strToArr.length; i++) {
  	  		if (i === 0) {
      			sumOfLeft = 0;
      			sumOfRight = sum;
    		} else {
      			sumOfLeft += strToArr[i-1];
      			sumOfRight -= strToArr[i];
    	}
    	let leftDiscontent = (strToArr[i] * i) - sumOfLeft;
    	let rightDiscontent = sumOfRight - (strToArr[i] * (strToArr.length - i - 1));
    	let result = leftDiscontent + rightDiscontent;
    	arrOfdiscontent.push(result);
  	}
    return String(arrOfdiscontent.join(' '));
}

  	let result = levelOfdiscontent(string);
    process.stdout.write(String(result));
});