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

const a = 10;
const b = 2;
console.log("First number (A): " + a);
console.log("First number (B): " + b);
console.log("A + B = " + add(a, b));
console.log("A - B = " + subtract(a, b));
console.log("A x B = " + multiply(a, b));
console.log("A / B = " + divide(a, b));