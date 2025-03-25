function getMultipleOf5(num1, num2) {
  let MultipOf5 = [];

  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    if (i % 5 === 0) {
      MultipOf5.push(i);
    }
  }
  return MultipOf5;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

function firstDuplicate(arr) {
  let firstDub = -1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return firstDub = arr[i];
      }
    }
  }
  return firstDub;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));
