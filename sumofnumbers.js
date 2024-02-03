// Sample list of numbers
const testNums = [1, 2, 3, 4, 5];

// Function to calculate sum using a for loop
function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Function to calculate sum using a while loop
function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

// Function to calculate sum using recursion
function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

// Function to calculate sum using underscore
function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (sum, num) {
    return sum + num;
  }, 0);
}

console.log('Sum using for loop:', sumFor(testNums));
console.log('Sum using while loop:', sumWhile(testNums));
console.log('Sum using recursion:', sumRecursion(testNums));
console.log('Sum using Underscore.js:', sumTheSimpleWay(testNums));
