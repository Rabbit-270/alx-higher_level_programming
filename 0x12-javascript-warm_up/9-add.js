#!/usr/bin/node

function add (a, b) {
  return (a + b);
}

const process = require('node:process');
const ARG_COUNT = process.argv.length - 2;
if (ARG_COUNT === 0) {
  console.log('NaN');
} else if (ARG_COUNT === 1) {
  console.log('NaN');
} else if (ARG_COUNT === 2) {
  const firstNumber = Number(process.argv[2 + 0]);
  const secondNumber = Number(process.argv[2 + 1]);
  console.log(add(firstNumber, secondNumber));
}
