const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0
let firstEvenNum ;
for (let i=0; i<nums.length; i++){
    if (nums[i] % 2 === 0) {
        firstEvenNum = nums[i];
        break;
    }
}

console.log(firstEvenNum);

// or 

let firstEvenNum2 ;

for (const num of nums){
    if (num % 2 === 0){
        firstEvenNum2 = num;
        break;
    }
}

console.log(firstEvenNum2);