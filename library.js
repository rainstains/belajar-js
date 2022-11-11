const prompt = require('prompt-sync')({sigint: true});

const num1 = prompt('first number: ');
const num2 = prompt('second number: ');

const add = Number(num1) + Number(num2)

console.log(num1+" + "+num2+" = "+add);