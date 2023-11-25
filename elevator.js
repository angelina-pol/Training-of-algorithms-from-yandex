const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
let lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  let k = +lines[0];
  let newArr = lines.slice(2).map(Number)

function elevator(arr, k) {
  arr = arr.map(BigInt)
  let countOfTrips = BigInt(0);
  let time = BigInt(0);
  let numOfFloor = BigInt(0);
  let freeSaetsInElevator = BigInt(k);
  for (numOfFloor = arr.length - 1; numOfFloor >= 0; numOfFloor--) {
    if (arr[numOfFloor] === 0) {
      continue;
    }
    if (arr[numOfFloor] !== 0 && freeSaetsInElevator === BigInt(k)) {
      let checkOnInteger = arr[numOfFloor] / BigInt(k)
      if (BigInt(k) * checkOnInteger === arr[numOfFloor]) {
        countOfTrips = BigInt(2) * BigInt(arr[numOfFloor]) / BigInt(k);
        time += countOfTrips * (BigInt(numOfFloor) + BigInt(1));
        continue;
      } else if (arr[numOfFloor] < freeSaetsInElevator) {
        freeSaetsInElevator -= arr[numOfFloor];
        time += BigInt(2) * (BigInt(numOfFloor) + BigInt(1));
        numOfFloor--;
      } else {
      countOfTrips = BigInt(2) * ((arr[numOfFloor] / BigInt(k)) + BigInt(1));
      time += BigInt(countOfTrips) * (BigInt(numOfFloor) + BigInt(1));
      freeSaetsInElevator = BigInt(k) - (arr[numOfFloor] - ((arr[numOfFloor] / BigInt(k)) * BigInt(k)));
      numOfFloor--;
      }
    }
    if (arr[numOfFloor] === 0 && freeSaetsInElevator !== BigInt(k)) {
      continue;
    }
    if (arr[numOfFloor] !== 0 && freeSaetsInElevator !== BigInt(k) && freeSaetsInElevator >= arr[numOfFloor]) {
      freeSaetsInElevator -= arr[numOfFloor];
      if (freeSaetsInElevator === 0) {
        freeSaetsInElevator = BigInt(k);
      }
      continue;
    }
    if (arr[numOfFloor] !== 0 && freeSaetsInElevator !== BigInt(k) && freeSaetsInElevator < arr[numOfFloor]) {
      arr[numOfFloor] = arr[numOfFloor] - BigInt(freeSaetsInElevator);
      freeSaetsInElevator = BigInt(k);
      numOfFloor++;
      continue
    }
  }
  return String(time);
}
  	let result = elevator(newArr, k)
    process.stdout.write(result);
});