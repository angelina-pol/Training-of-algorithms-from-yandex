const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});
let lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  let newArr = [];
  for (let i = 1; i < lines.length; i++) {
    newArr.push(lines[i].split(' ').map(Number))
  }

  function rabbit(arr) {
    let maxSide = 0;
    for (let i = 1; i < arr.length; i++) {
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] !== 0) {
          arr[i][j] = Math.min(arr[i - 1][j - 1], arr[i][j - 1], arr[i - 1][j]) + 1;
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      let maxSideString = Math.max.apply(null, arr[i]);
      if (maxSideString > maxSide) {
        maxSide = maxSideStringж
      }
    }
    return String(maxSide);
  }
  let result = rabbit(newArr)
  process.stdout.write(result);
});