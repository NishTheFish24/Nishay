function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function square(a) {
  return mult(a, a);
}

console.log(add(add(10, 95), mult(3, 6)));
console.log(divide(subtract(10, 95), mult(55, 6)));
console.log(square(divide(1, 5), add(3, 2)));
console.log(mult(subtract(2, 1), mult(44, 667)));
console.log(subtract(square(67, 2), square(35, 2)));
