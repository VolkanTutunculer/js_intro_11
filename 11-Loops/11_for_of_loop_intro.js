const objects = [ 'Pen', 'Eraser', 'Board', 'Paper' ];

// You can use for loop to iterate arrays but for... of loop is better for(let i=0; i<objects.length; i++) { // 8, 1, 2, 3
//for(let i=0; i<objects.length; i++){
//    console.log(objects [i]);
//}

for(let i of objects) {
    console.log(i)
}

let countStartP=0

for(const obj of objects) {
    if(obj.startsWith('P')) countStartP++;
}

console.log(countStartP);