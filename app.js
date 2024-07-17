// var arr = [1, 2, 6, 5, 6, 7, 6, 8, 9, 6, 3, 6];

// var firstIndex = arr.indexOf(6);
// var foundElem = arr.slice(firstIndex + 1).find((e) => e === 6);
// var foundIndex =
//   foundElem !== undefined ? arr.indexOf(foundElem, firstIndex + 1) : -1;

// console.log(foundElem);
// console.log(foundIndex);
// 3
// let soz = prompt("So'z kiriting:");
// let sozArray = soz.split(" ");
// let format = prompt("Format kiriting (a-z, z-a, 0-9, 9-0):");

// function sortArray(array, format) {
//   if (format === "a-z") {
//     return array.sort();
//   } else if (format === "z-a") {
//     return array.sort().reverse();
//   } else if (format === "0-9") {
//     return array.sort((a, b) => a - b);
//   } else if (format === "9-0") {
//     return array.sort((a, b) => b - a);
//   } else {
//     return array;
//   }
// }
// let sortedArray = sortArray(sozArray, format);

// console.log("Asl prompt: " + soz);
// console.log("Saralash turi: " + format);
// console.log("Saralangan natija: " + sortedArray.join(" "));

const birthDateInput = prompt(
  "Tug'ilgan kuningizni kiriting (masalan, 01.11.2011 yoki 2011-11-01)"
);
const birthDate = new Date(birthDateInput);
const endDate = new Date();
const timeTest = endDate - birthDate;

const secondsTest = timeTest / 1000;
const minutesTest = timeTest / (1000 * 60);
const hoursTest = timeTest / (1000 * 60 * 60);
const daysTest = timeTest / (1000 * 60 * 60 * 24);
const monthsTest = timeTest / (1000 * 60 * 60 * 24 * 31);
const yearsTest = timeTest / (1000 * 60 * 60 * 24 * 365);
const heartSpeedMinute = 70;
const heartTest = minutesTest * heartSpeedMinute;

console.log(`O'tgan soniyalar: ${secondsTest.toFixed(0)}`);
console.log(`O'tgan daqiqalar: ${minutesTest.toFixed(0)}`);
console.log(`O'tgan soatlar: ${hoursTest.toFixed(0)}`);
console.log(`O'tgan kunlar: ${daysTest.toFixed(0)}`);
console.log(`O'tgan oylar: ${monthsTest.toFixed(0)}`);
console.log(`O'tgan yillar: ${yearsTest.toFixed(0)}`);
console.log(`Necha marta yurak urishi : ${heartTest.toFixed(0)}`);
