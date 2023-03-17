let userNumber = prompt("Podaj liczbe całkowitą");
console.log(typeof(userNumber));
userNumber = Number.parseInt(userNumber);
console.log(typeof(userNumber));

function calculateSquareArea(height) {
  return height * height;
}

let squareArea = calculateSquareArea(userNumber);
console.log(squareArea);

let decimalNum = prompt("Podaj liczbę dziesiętną: ");
decimalNum = Number.parseFloat(decimalNum);
console.log(typeof decimalNum);
squareArea = calculateSquareArea(decimalNum);

console.log(squareArea);
console.log(squareArea.toFixed(2));