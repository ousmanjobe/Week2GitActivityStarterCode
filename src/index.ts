import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_sub = calc.subtract(3, 2);
const result_div = calc.divide(10, 2);
const result_mult = calc.multiply(3, 7);

console.log(`result_add = ${result_add}`);
console.log(`result_subtract = ${result_sub}`);
console.log(`result_multiply = ${result_mult}`);
console.log(`result_div = ${result_div}`);

