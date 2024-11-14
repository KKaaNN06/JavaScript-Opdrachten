function printHelloWorld() {
  console.log("Hello, world!");
}

printHelloWorld();

function doubleNumber(num) {
  return num * 2;
}

let resultaat = doubleNumber(11);
console.log(resultaat); //Dit zal 22 tonen

function sumTwoNumbers(a, b) {
  return a + b;
}

resultaat = sumTwoNumbers(8, 12);
console.log(resultaat); //Dit zal 20 tonen

function toUpperCase(str) {
  console.log(str.toUpperCase());
}

toUpperCase("hallo wereld"); //Dit al"HALLO WERELD" tonen

function isEven(num) {
  return num % 2 === 0;
}

resultaat = isEven(7);
console.log(resultaat); //This will show false

function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

resultaat = sumArray([1, 2, 3, 4, 5]);
console.log(resultaat); //This will show 15

function getCurrentDateTime() {
  return new Date();
}

let huidigeDatumTijd = getCurrentDatetime();
console.log(huidigeDatumTijd); //This shows the current date and time

function calculateAverage(x, y, z) {
  return (x + y + z) / 3;
}

function getFirstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}

function greet(name, greeting) {
  return `${greeting}, ${name}!`;
}
