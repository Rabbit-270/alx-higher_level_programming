#!/usr/bin/node

function recursiveCounter (a) {
  if (a === 1) {
    return (1);
  }
  return a * recursiveCounter(a - 1);
}
const process = require('node:process');
const ARG_COUNTER = process.argv.length - 2;
if (ARG_COUNTER === 0) {
  console.log(1);
} else {
  const convertedValue = Number(process.argv[2]);
  if (!isNaN(convertedValue)) {
    console.log(recursiveCounter(convertedValue));
  }
}
