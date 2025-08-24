let display = document.getElementById("display");
let currentInput = "";
let firstValue = null;
let operation = null;

function appendNumber(num) {
  if (currentInput === "0") currentInput = "";
  currentInput += num;
  display.innerText = currentInput;
}

function setOperation(op) {
  if (currentInput === "") return;
  firstValue = parseFloat(currentInput);
  operation = op;
  currentInput = "";
}

function calculate() {
  if (firstValue === null || currentInput === "") return;
  let secondValue = parseFloat(currentInput);
  let result = 0;

  if (operation === "+") result = firstValue + secondValue;
  else if (operation === "-") result = firstValue - secondValue;

  display.innerText = result;
  currentInput = result.toString();
  firstValue = null;
  operation = null;
}