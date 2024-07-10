function addValueToArray() {
  let userInput = prompt("Iltimos, qiymatni kiriting:");
  if (!isNaN(userInput)) {
    numbers.push(Number(userInput));
    console.log("Number ko'rinishidagi qiymat kiritildi:", numbers);
  } else {
    strings.push(userInput);
    console.log("String ko'rinishidagi qiymat kiritildi:", strings);
  }
}
let numbers = [];
let strings = [];
addValueToArray();
