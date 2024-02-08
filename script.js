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
    case "clear":
      a = 0;
      b = 0;
      getFirst = false;
      reWrite = false;
      buttonEnabled = false;
      changeOperation = "";
      resultPressed = true;
      para.textContent = "0";
      break;
    case "negative":
      if (para.textContent != "0") {
        if (!para.textContent.includes("-")) {
          para.textContent = `-${para.textContent}`;
        } else {
          para.textContent = para.textContent.replace("-", "");
        }
      }
      break;
    case "float":
      if (!para.textContent.includes(".")) {
        para.textContent = `${para.textContent}.`;
      }
    case "percentage":
      if (para.textContent != "0") {
        if (
          changeOperation === "" ||
          changeOperation === "*" ||
          changeOperation === "/"
        ) {
          para.textContent = parseInt(para.textContent) / 100;
        } else if (changeOperation === "+" || changeOperation === "-") {
          para.textContent = a * (parseInt(para.textContent) / 100);
        }
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
