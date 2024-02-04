const prompt = require("prompt-sync")();
var prototype = require('prototype');

function countVovwls(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }

    console.log(count);

}

// countVovwls("hello");

const countvowels = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }

    console.log(count);
}


// demonstration
// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach((val) => { 
//     console.log(val);
//     var upper = val.toUpperCase();
//     console.log(upper);

// });


// let arr2 = [5, 15, 23, 22, 10, 3, 13];

// arr2.forEach((val,idx,arr2) => {
//     console.log(val*val);
// });

// difference between map and forEach is that map function return new array and forEach returns only values.

// arr2.map((val) => {
//     // console.log(val*val);
//     if (val % 2 === 0) {
//         console.log(val);
//     }
// })


// let newArr = arr2.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(newArr);


// let arr = [95,68,85,76,99,92,45];

// let newArr2 = arr.filter((val) =>{
//     return val>90;
// });

// console.log(newArr2);


let sumarr = prompt("Enter the array");

const initialValue = 0;
const sumWithInitial = sumarr.prototype.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);


// DOM-> 