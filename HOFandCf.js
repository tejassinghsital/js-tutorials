let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;

// tradiitional way

console.log("Below output using simple function call");
console.log(add(5, 2));
console.log(sub(5, 2));
console.log(mul(5, 2));


//Mentos jindgi with call back and higher order function

let calculator = (num1, num2, operator) => operator(num1, num2);

//here claculator is higher order fx and add,sub,mul or operator is callback functions.

console.log("Below output using callback and higher order function");
console.log(calculator(5, 2, add));
console.log(calculator(5, 2, sub));
console.log(calculator(5, 2, mul));

