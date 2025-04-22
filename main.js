/*----------------------*/
/* Variable Definitions */
/*----------------------*/

const button_0 = document.querySelector("#button-0");
const button_1 = document.querySelector("#button-1");
const button_2 = document.querySelector("#button-2");
const button_3 = document.querySelector("#button-3");
const button_4 = document.querySelector("#button-4");
const button_5 = document.querySelector("#button-5");
const button_6 = document.querySelector("#button-6");
const button_7 = document.querySelector("#button-7");
const button_8 = document.querySelector("#button-8");
const button_9 = document.querySelector("#button-9");
const button_decimal = document.querySelector("#button-decimal");
const button_add = document.querySelector("#button-add");
const button_subtract = document.querySelector("#button-subtract");
const button_multiply = document.querySelector("#button-multiply");
const button_divide = document.querySelector("#button-divide");
const button_equals = document.querySelector("#button-equals");
const button_clear = document.querySelector("#button-clear");
const displayWindow = document.querySelector("#display");

button_clear.addEventListener("click", () => clear());
button_0.addEventListener("click", () => input("0"));
button_1.addEventListener("click", () => input("1"));
button_2.addEventListener("click", () => input("2"));
button_3.addEventListener("click", () => input("3"));
button_4.addEventListener("click", () => input("4"));
button_5.addEventListener("click", () => input("5"));
button_6.addEventListener("click", () => input("6"));
button_7.addEventListener("click", () => input("7"));
button_8.addEventListener("click", () => input("8"));
button_9.addEventListener("click", () => input("9"));
button_decimal.addEventListener("click", () => input("."));
button_add.addEventListener("click", () => passOperation("+"));
button_subtract.addEventListener("click", () => passOperation("-"));
button_multiply.addEventListener("click", () => passOperation("*"));
button_divide.addEventListener("click", () => passOperation("/"));
button_equals.addEventListener("click", () => solve());

let x = "";
let y = "";
let operator = "";
let numberEnd = false;

/*---------------------*/
/* Interface Functions */
/*---------------------*/

function input(key) {
    if (numberEnd) {
        displayWindow.textContent = key;
        numberEnd = false;
    } else {
        displayWindow.textContent += key;
    }
}

function clear() {
    x = "";
    y = "";
    operator = "";
    displayWindow.textContent = "";
    numberEnd = false;
}

function passOperation(key) {
    if (x) {
        if (numberEnd) {
            operator = key;
        } else {
            solve();
            operator = key;
        }
    } else {
        if ((!displayWindow.textContent) && (key === "-")) {
            displayWindow.textContent = "-";
            return;
        }
        x = displayWindow.textContent;
        operator = key;
        numberEnd = true;
    }
}

function solve() {
    if (operator) {
        if (!numberEnd) {
            y = displayWindow.textContent;
        }
        let solution = operate(Number(x), Number(y), operator);
        displayWindow.textContent = solution;
        x = solution;
        numberEnd = true;
    }
}

/*-----------------*/
/* Logic Functions */
/*-----------------*/

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    switch(operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}