function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateGradient() {
  const numColors = getRandomInt(2, 5);
  const angle = getRandomInt(0, 360);
  let gradient = `linear-gradient(${angle}deg`;

  for (let i = 0; i < numColors; i++) {
    gradient += `, ${getRandomColor()}`;
  }
  gradient += ")";
  return gradient;
}

function generateSquares() {
  const squaresContainer = document.getElementById("squaresContainer");
  squaresContainer.innerHTML = "";
  const count = document.getElementById("squareCount").value;

  for (let i = 0; i < count; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.background = generateGradient();
    squaresContainer.appendChild(square);
  }
}
