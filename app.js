// function addValueToArray() {
//   let userInput = prompt("Iltimos, qiymatni kiriting:");
//   if (!isNaN(userInput)) {
//     numbers.push(Number(userInput));
//     console.log("Number ko'rinishidagi qiymat kiritildi:", numbers);
//   } else {
//     strings.push(userInput);
//     console.log("String ko'rinishidagi qiymat kiritildi:", strings);
//   }
// }
// let numbers = [];
// let strings = [];
// addValueToArray();

let myArray = ["salom1", "salom2", "salom3", "salom4", "salom5"];
let method = prompt(
  "Array methodini kiriting (masalan: 'push()', 'pop()', 'shift()', 'unshift()', 'reverse()' `join()`, `toString()`, `at()` )"
);
try {
  let executeMethod = new Function(
    "array",
    `
    let result = array.${method};
        console.log("Metodning natijasi:", result);
        console.log("O'zgartirilgan array:", array);
    `
  );
  executeMethod(myArray);
} catch (error) {
  console.log("Xato: Noto'g'ri method kiritildi.");
}

// var arrLength = arr.length;
// var arrToString = arr.toString();
// var arrAt = arr.at(3);
// var arrnum = arr[3];
// var arrjoin = arr.join(" * ");
// var arrpop = arr.pop();
// var arrpush = arr.push("Salom6");
// var arrshift = arr.shift();
// var arrUnshift = arr.unshift("SAlom7");

// console.log(arr);
// console.log(arrLength);
// console.log(arrToString);
// console.log(arrAt);
// console.log(arrnum);
// console.log(arrjoin);
// console.log(arrpop);
// console.log(arrpush);
// console.log(arr);
// console.log(arrshift);
// console.log(arrUnshift);
// console.log(arr);
