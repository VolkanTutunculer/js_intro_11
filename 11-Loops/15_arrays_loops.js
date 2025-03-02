const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
// Find the sum of first 3 and last 3 elements -> 31


// this solution run all the lenght as a loop. so if there is 10000 it will be slow.
let sum=0
for (let i = 0; i < nums.length; i++) {
    if (i < 3 || i >= nums.length - 3) {
        sum += nums[i];
    }
}

console.log(sum);

console.log('\n--------Solution-1--------\n');
