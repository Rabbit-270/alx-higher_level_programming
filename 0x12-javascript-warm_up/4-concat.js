#!/usr/bin/node

const process = require('node:process');
let firstArgument;
let secondArgument;
const Args = process.argv.length - 2;

if (Args === 1) {
  firstArgument = process.argv[2 + 0];
} else if (Args === 2) {
  firstArgument = process.argv[2 + 0];
  secondArgument = process.argv[2 + 1];
}
console.log(firstArgument + ' is ' + secondArgument);
