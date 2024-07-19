// const birthDateInput = prompt(
//   "Tug'ilgan kuningizni kiriting (masalan, 01.11.2011 yoki 2011-11-01)"
// );
// const birthDate = new Date(birthDateInput);
// const endDate = new Date();
// const timeTest = endDate - birthDate;

// const secondsTest = timeTest / 1000;
// const minutesTest = timeTest / (1000 * 60);
// const hoursTest = timeTest / (1000 * 60 * 60);
// const daysTest = timeTest / (1000 * 60 * 60 * 24);
// const monthsTest = timeTest / (1000 * 60 * 60 * 24 * 31);
// const yearsTest = timeTest / (1000 * 60 * 60 * 24 * 365);
// const heartSpeedMinute = 70;
// const heartTest = minutesTest * heartSpeedMinute;

// console.log(`O'tgan soniyalar: ${secondsTest.toFixed(0)}`);
// console.log(`O'tgan daqiqalar: ${minutesTest.toFixed(0)}`);
// console.log(`O'tgan soatlar: ${hoursTest.toFixed(0)}`);
// console.log(`O'tgan kunlar: ${daysTest.toFixed(0)}`);
// console.log(`O'tgan oylar: ${monthsTest.toFixed(0)}`);
// console.log(`O'tgan yillar: ${yearsTest.toFixed(0)}`);
// console.log(`Nechqa marta yurak urishgi: ${heartTest.toFixed(0)}`);
// const num1 = prompt("Enter new number");
// const num2 = prompt("Enter new number");
// const num3 = prompt("Enter new number");

// const random = Math.floor(Math.random() * 20);
// if (random == num1 || random == num2 || random == num3) {
//   console.log("yutdingiz");
// } else {
//   console.log("yutqazdingiz");
// }
// console.log(num1, num2, num3);
// console.log(random);

// Telefon raqamlarini generatsiya qilish
function generatePhoneNumbers() {
  const prefixes = ["91", "95", "99", "93", "94", "97", "88", "77", "50"];
  const phoneNumbers = new Set();

  while (phoneNumbers.size < 500) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const number =
      "+998" +
      prefix +
      Math.floor(1000000 + Math.random() * 9000000).toString();
    phoneNumbers.add(number);
  }
  return Array.from(phoneNumbers);
}
function generateUniqueNumbers() {
  const numbers = new Set();
  while (numbers.size < 30) {
    const number = Math.floor(Math.random() * 301);
    numbers.add(number);
  }
  return Array.from(numbers);
}
function checkUserNumber(phoneNumbers, userNumber) {
  return phoneNumbers.includes(userNumber);
}
function playGame() {
  const phoneNumbers = generatePhoneNumbers();
  const userNumber = document.getElementById("userNumber").value;

  if (!checkUserNumber(phoneNumbers, userNumber)) {
    document.write(
      "Siz kiritgan raqam ro'yxatda mavjud emas! Generatsiya qilingan raqamlar: " +
        phoneNumbers.join(", ")
    );
    return;
  }

  document.getElementById("step2").style.display = "block";
}

function checkNumbers() {
  const userNumbers = document
    .getElementById("userNumbers")
    .value.split(",")
    .map(Number);
  const generatedNumbers = generateUniqueNumbers();
  const matches = userNumbers.filter((num) => generatedNumbers.includes(num));
  if (matches.length > 0) {
    document.write("Tabriklaymiz! Siz yutdingiz!");
  } else {
    document.write("Afsuski, siz yutolmadingiz.");
  }
  console.log("Generated Numbers:", generatedNumbers);
  console.log("User Numbers:", userNumbers);
  console.log("Matches:", matches);
}
// Telefon raqamlarini generatsiya qilish
