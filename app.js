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

// function convertCurrency(promt) {

//     const usdRate = 10600;
//     const euroRate = 12500;salom
//     const rubRate = 145;
//     const rupiyRate = 140;
//     var promt = prompt("salom");

//     let usdEquivalent = (promt / usdRate).toFixed(2);
//     let euroEquivalent = (promt / euroRate).toFixed(2);
//     let rubEquivalent = (promt / rubRate).toFixed(2);
//     let rupiyEquivalent = (promt / rupiyRate).toFixed(2);

//     console.log(`${promt} UZS = ${usdEquivalent} USD`);
//     console.log(`${promt} UZS = ${euroEquivalent} EURO`);
//     console.log(`${promt} UZS = ${rubEquivalent} RUB`);
//     console.log(`${promt} UZS = ${rupiyEquivalent} RUPIY`);
// }

// convertCurrency(40000);
