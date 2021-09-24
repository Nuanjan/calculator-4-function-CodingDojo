// this function will get the number
var stack = [];
var value = "";
var displayText = document.querySelector("#display");
displayText.innerText = 0;
result = 0;
function press(number) {
  if (
    stack[stack.length - 1] == "-" ||
    stack[stack.length - 1] == "+" ||
    stack[stack.length - 1] == "*" ||
    stack[stack.length - 1] == "/"
  ) {
    if (stack[stack.length - 1] == "/" && parseInt(number) === 0) {
      displayValue("error");
      stack = [];
      value = "";
      result = 0;
    } else displayValue(number);
    stack.push(number.toString());
  } else if (stack.length == 0) {
    value += number.toString();
    stack.push(value);
    displayValue(number);
  } else {
    if (stack) {
      value = stack.pop();
      value += number.toString();
      stack.push(value);
      displayValue(value);
    }
  }
}

function clr() {
  stack = [];
  value = "";
  result = 0;
  displayValue(result);
}

function setOP(operator) {
  if (
    stack.length !== 0 &&
    (stack[stack.length - 1] !== "-" ||
      stack[stack.length - 1] !== "+" ||
      stack[stack.length - 1] !== "/" ||
      stack[stack.length - 1] !== "*")
  ) {
    stack.push(operator.toString());
    value = "";
  }
}

function calculate() {
  if (stack) {
    result = parseFloat(stack[0]);
    for (let i = 2; i < stack.length; i += 2) {
      if (stack[i - 1] === "-") {
        result -= parseFloat(stack[i]);
      } else if (stack[i - 1] === "+") {
        result += parseFloat(stack[i]);

        result *= parseFloat(stack[i]);
      } else if (stack[i - 1] === "/") {
        result /= parseFloat(stack[i]);
      }
    }
  }
  displayValue(result.toFixed(3));
}

function displayValue(value) {
  displayText.innerText = value;
}
