// script.js

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

// Mapping for display symbols to actual JS operators
const operatorMap = {
  "×": "*",
  "÷": "/",
  "−": "-",
  "+": "+"
};

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      updateDisplay("0");
      return;
    }

    if (value === "=") {
      calculateResult();
      return;
    }

    if (resultDisplayed && !isOperator(value)) {
      currentInput = ""; // Reset for new input
      resultDisplayed = false;
    }

    currentInput += mapValue(value);
    updateDisplay(currentInput);
  });
});

// Map operators for JavaScript evaluation
function mapValue(value) {
  return operatorMap[value] || value;
}

function isOperator(val) {
  return ["+", "−", "×", "÷"].includes(val);
}

function updateDisplay(value) {
  display.textContent = value;
}

// Calculate expression
function calculateResult() {
  try {
    const expression = currentInput.replace(/[×÷−]/g, match => operatorMap[match]);
    const result = eval(expression);
    updateDisplay(result);
    currentInput = result.toString();
    resultDisplayed = true;
  } catch {
    updateDisplay("Error");
    currentInput = "";
  }
}

// Bonus: Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || key === ".") {
    currentInput += key;
    updateDisplay(currentInput);
  } else if (["+", "-", "*", "/"].includes(key)) {
    currentInput += key;
    updateDisplay(currentInput);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "0");
  } else if (key.toLowerCase() === "c") {
    currentInput = "";
    updateDisplay("0");
  }
});