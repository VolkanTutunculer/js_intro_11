// Task 1
console.log("\n----Task 1---");

function findMedian(arr1, arr2) {
  const numbers = [...arr1, ...arr2].sort((a, b) => a - b);

  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 1) {
    return numbers[middle];
  } else {
    const sum = numbers[middle - 1] + numbers[middle];
    return sum / 2;
  }
}

console.log(findMedian([1, 3], [2]));
console.log(findMedian([1, 2], [3, 4]));
console.log(findMedian([4], [3]));
console.log(findMedian([4], []));
console.log(findMedian([0], [0, 1]));

// Task 2
console.log("\n----Task 2---");

function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
}

console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
console.log(calculateFactorial(5));
console.log(calculateFactorial(6));
console.log(calculateFactorial(10));
console.log(calculateFactorial(4));

// Task 3
console.log("\n----Task 3---");

function calculateGCD(num1, num2) {
  let gcd = 0;
  if (num1 === 0) return num2;
  if (num2 === 0) return num1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0 && gcd < i) {
      gcd = i;
    }
  }

  return gcd;
}

console.log(calculateGCD(8, 12));
console.log(calculateGCD(17, 5));
console.log(calculateGCD(48, 18));
console.log(calculateGCD(0, 5));
console.log(calculateGCD(21, 14));
console.log(calculateGCD(60, 48));

// Task 4
console.log("\n----Task 4---");

function calculateLCM(num1, num2) {
  if (num1 === 0 || num2 === 0) return 0;

  for (let i = Math.max(num1, num2); ; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}

console.log(calculateLCM(8, 12));
console.log(calculateLCM(17, 5));
console.log(calculateLCM(48, 18));
console.log(calculateLCM(0, 5));
console.log(calculateLCM(21, 14));
console.log(calculateLCM(60, 48));
