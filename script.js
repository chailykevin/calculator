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
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

const buttons = document.querySelector(".buttons");
const para = document.querySelector("p");

//To store values for operation.
let a;
let b;

//getFirst for checking if the a variable has a value or not.
//reWrite for checking if the result can be overwritten or not.
//buttonEnabled to prevent spam click operatioin button.
//changeOperation to store operation value.
//resultPressed to prevent result button to be spammed.
let getFirst = false;
let reWrite = false;
let buttonEnabled = false;
let changeOperation = "";
let resultPressed = true;

//Add event listener to number button
buttons.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "0":
      updatePara("0", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "1":
      updatePara("1", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "2":
      updatePara("2", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "3":
      updatePara("3", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "4":
      updatePara("4", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "5":
      updatePara("5", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "6":
      updatePara("6", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "7":
      updatePara("7", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "8":
      updatePara("8", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "9":
      updatePara("9", reWrite);
      reWrite = false;
      buttonEnabled = true;
      break;
    case "add":
      if (buttonEnabled) {
        if (!getFirst) {
          a = parseFloat(para.textContent);
          getFirst = true;
          reWrite = true;
          buttonEnabled = false;
          changeOperation = "+";
        } else {
          b = parseFloat(para.textContent);
          para.textContent = operate(a, b, changeOperation);
          a = parseFloat(para.textContent);
          reWrite = true;
          buttonEnabled = false;
          changeOperation = "+";
        }
      } else {
        b = parseFloat(para.textContent);
        reWrite = true;
        resultPressed = true;
        changeOperation = "+";
      }
      break;
    case "subtract":
      if (buttonEnabled) {
        if (!getFirst) {
          a = parseFloat(para.textContent);
          getFirst = true;
          reWrite = true;
          buttonEnabled = false;
          changeOperation = "-";
        } else {
          b = parseFloat(para.textContent);
          para.textContent = operate(a, b, changeOperation);
          a = parseFloat(para.textContent);
          reWrite = true;
          buttonEnabled = false;
          changeOperation = "-";
          resultPressed = true;
        }
      } else {
        b = parseFloat(para.textContent);
        reWrite = true;
        resultPressed = true;
        changeOperation = "-";
      }
      break;
    case "multiply":
      if (buttonEnabled) {
        if (!getFirst) {
          a = parseFloat(para.textContent);
          getFirst = true;
          reWrite = true;
          buttonEnabled = false;
          changeOperation = "*";
        } else {
          b = parseFloat(para.textContent);
          para.textContent = operate(a, b, changeOperation);
          a = parseFloat(para.textContent);
          reWrite = true;
          buttonEnabled = false;
          changeOperation = "*";
          resultPressed = true;
        }
      } else {
        b = parseFloat(para.textContent);
        reWrite = true;
        resultPressed = true;
        changeOperation = "*";
      }
      break;
    case "divide":
      if (buttonEnabled) {
        if (!getFirst) {
          a = parseFloat(para.textContent);
          getFirst = true;
          reWrite = true;
          buttonEnabled = false;
          changeOperation = "/";
        } else {
          b = parseFloat(para.textContent);
          para.textContent = operate(a, b, changeOperation);
          a = parseFloat(para.textContent);
          reWrite = true;
          buttonEnabled = false;
          changeOperation = "/";
          resultPressed = true;
        }
      } else {
        b = parseFloat(para.textContent);
        reWrite = true;
        resultPressed = true;
        changeOperation = "/";
      }
      break;
    case "result":
      if (getFirst && resultPressed) {
        b = parseFloat(para.textContent);
        para.textContent = operate(a, b, changeOperation);
        a = parseFloat(para.textContent);
        reWrite = true;
        buttonEnabled = false;
        resultPressed = false;
      }
      break;
  }
});

//Function to append paragraph element
function updatePara(a) {
  if (para.textContent === "0" || reWrite) {
    para.textContent = a;
  } else {
    para.textContent += a;
  }
}
