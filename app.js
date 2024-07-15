// var arr = [1, 2, 5, 6, 7, 8, 9, 6, 3, 6];

// var firstIndex = arr.indexOf(6);
// var foundElem = arr.slice(firstIndex + 1).find((e) => e === 6);
// var foundIndex =
//   foundElem !== undefined ? arr.indexOf(foundElem, firstIndex + 1) : -1;

// console.log(foundElem);
// console.log(foundIndex);

let soz = prompt("So'z kiriting:");
let sozArray = soz.split(" ");
let format = prompt("Format kiriting (a-z, z-a, 0-9, 9-0):");

function sortArray(array, format) {
  if (format === "a-z") {
    return array.sort();
  } else if (format === "z-a") {
    return array.sort().reverse();
  } else if (format === "0-9") {
    return array.sort((a, b) => a - b);
  } else if (format === "9-0") {
    return array.sort((a, b) => b - a);
  } else {
    return array;
  }
}
let sortedArray = sortArray(sozArray, format);

console.log("Asl prompt: " + soz);
console.log("Saralash turi: " + format);
console.log("Saralangan natija: " + sortedArray.join(" "));
