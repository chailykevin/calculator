function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}

//Add event listener to number button
const buttons = document.querySelector(".buttons");
const para = document.querySelector("p");
let a;
let b;

buttons.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "0":
      updatePara("0");
      break;
    case "1":
      updatePara("1");
      break;
    case "2":
      updatePara("2");
      break;
    case "3":
      updatePara("3");
      break;
    case "4":
      updatePara("4");
      break;
    case "5":
      updatePara("5");
      break;
    case "6":
      updatePara("6");
      break;
    case "7":
      updatePara("7");
      break;
    case "8":
      updatePara("8");
      break;
    case "9":
      updatePara("9");
      break;
    case "add":
      break;
    case "subtract":
      break;
    case "multiply":
      break;
    case "divide":
      break;
  }
});

//Function to append paragraph element
function updatePara(a) {
  if (para.textContent === "0") {
    if (a != 0) {
      para.textContent = a;
    }
  } else {
    para.textContent += a;
  }
}
