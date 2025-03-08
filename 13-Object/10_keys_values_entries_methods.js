const phone = {
    brand: 'IPhone',
    strorage: 64,
    color: 'Yellow',
}

console.log(Object.keys(phone)); // [ 'brand', 'strorage', 'color' ]
console.log(Object.values(phone)); // [ 'IPhone', 64, 'Yellow' ]
console.log(Object.entries(phone)); // [ [ 'brand', 'IPhone' ], [ 'strorage', 64 ], [ 'color', 'Yellow' ] ]

// keys: array of keys
// values: array of values
// entries: nested array of properties

for (const feature of Object.keys(phone)){ // [ 'brand', 'strorage', 'color' ]
    console.log(feature);
}

for (const value of Object.values(phone)){ // [ 'IPhone', 64, 'Yellow' ]
    console.log(value);
}

for (const entry of Object.entries(phone)){  // [ [ 'brand', 'IPhone' ], [ 'strorage', 64 ], [ 'color', 'Yellow' ] ]
    console.log(entry);
}

for (const entry of Object.entries(phone)){
    console.log(entry[0]); // gives  // [ 'brand', 'strorage', 'color' ]
}

for (const entry of Object.entries(phone)){
    console.log(`the entry key is ${entry[0]} and the entry value is ${entry[1]}`);
}
// the entry key is brand and the entry value is IPhone
// the entry key is strorage and the entry value is 64
// the entry key is color and the entry value is Yellow


for (const [key, value] of Object.entries(phone)){
    console.log(`the entry key is ${key} and the entry value is ${value}`);
}
// the entry key is brand and the entry value is IPhone
// the entry key is strorage and the entry value is 64
// the entry key is color and the entry value is Yellow