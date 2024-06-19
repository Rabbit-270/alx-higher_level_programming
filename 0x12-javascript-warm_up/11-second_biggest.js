#!/usr/bin/node

function sort (a) {
  return (a.sort());
}
const process = require('node:process');
const ARG_COUNT = process.argv.length - 2;
if (ARG_COUNT === 0) {
  console.log(0);
} else if (ARG_COUNT === 1) {
  console.log(0);
} else {
  const ARRAY = process.argv.slice(2);
  const sorted_Array = sort(ARRAY);
  const convertedValue = Number(sorted_Array[sorted_Array.length - 2]);
  console.log(convertedValue);
}
