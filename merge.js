const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
let lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  let string1 = lines[1];
  let string2 = lines[3];
function merge(str1, str2) {
  let left = str1.split(' ').map(Number);
  let right = str2.split(' ').map(Number);
  let newArr = left.concat(right);
  let resultArr = [];
  let currentLeftIndex = 0;
  let currentRightIndex = newArr.indexOf(right[0]);
  let end = newArr.length - 1;
  if (str1 === str2) {
    return resultArr = left.concat(right).join(' ');
  }
  if (str1 === '') {
    return str2;
  }
  if (str2 === '') {
    return str1;
  }
  if (str1 === '' && str2 === '') {
    return '';
  }
  if (left[left.length - 1] < right[0]) {
    return resultArr = left.concat(right).join(' ');
  }
  if (right[right.length - 1] < left[0]) {
    return resultArr = right.concat(left).join(' ');
  }
  while (currentLeftIndex < left.length && currentRightIndex <= end) {
    if (newArr[currentLeftIndex] <= newArr[currentRightIndex]) {
      resultArr.push(newArr[currentLeftIndex]);
      currentLeftIndex++;
      continue;
    }
    if (newArr[currentLeftIndex] > newArr[currentRightIndex]) {
      resultArr.push(newArr[currentRightIndex]);
      currentRightIndex++;
      continue;
    }
  }
  if (currentLeftIndex === newArr.indexOf(right[0])) {
    resultArr = [...resultArr, ...newArr.slice(currentRightIndex)];
  }
  if (currentLeftIndex <= left.length && currentRightIndex >= end) {
    resultArr = [...resultArr, ...left.slice(currentLeftIndex)];
  }
  if (currentLeftIndex >= left.length && currentRightIndex <= end) {
    resultArr = [...resultArr, ...right.slice(currentRightIndex)];
  }
  return resultArr.join(' ');
}   
  let result = merge(string1, string2)
    process.stdout.write(result);
});