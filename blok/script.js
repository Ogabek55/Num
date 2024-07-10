function convertCurrency(promt) {
  const usdRate = 10600;
  const euroRate = 12500;
  const rubRate = 145;
  const rupiyRate = 140;
  var promt = prompt("Raqam kiriting");

  let usdEquivalent = (promt / usdRate).toFixed(2);
  let euroEquivalent = (promt / euroRate).toFixed(2);
  let rubEquivalent = (promt / rubRate).toFixed(2);
  let rupiyEquivalent = (promt / rupiyRate).toFixed(2);

  console.log(`${promt} UZS = ${usdEquivalent} USD`);
  console.log(`${promt} UZS = ${euroEquivalent} EURO`);
  console.log(`${promt} UZS = ${rubEquivalent} RUB`);
  console.log(`${promt} UZS = ${rupiyEquivalent} RUPIY`);
}

convertCurrency(40000);
