/*Create an array of numbers, 10,20 and 30.Change the value of 30 into 99.*/

const num = [10,20,30];
num [2] = 99
console.log(num);

/*Create a function, getLastValue(array) that takes an array and return the last value in the array*/

function getLastValue(arr) {
  const lastValue = arr[arr.length - 1];
  console.log(lastValue);
}

getLastValue(['Hi', 'Hello', 'Ola', 'Bonjour']);

//Create a function that takes an array and swap the first and last value

function swapFirstAndLast(arr) {
  if (arr.length < 2) {
      // Array has fewer than two elements, no need to swap
      return arr;
  }

  const first = arr[0];
  const last = arr[arr.length - 1];

  // Swap the first and last elements
  arr[0] = last;
  arr[arr.length - 1] = first;

  return arr;
}

const originalArray = ['Hi', 'Hello', 'Ola', 'Bonjour'];
const swappedArray = swapFirstAndLast(originalArray);

console.log(swappedArray);
