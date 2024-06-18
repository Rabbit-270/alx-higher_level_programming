#!/usr/bin/node

const process = require('node:process');
const ARGS_COUNT = process.argv.length - 2;
if (ARGS_COUNT === 0) {
  console.log('Missing size');
} else {
  const size = process.argv[2];
  const convertedValue = Number(size);
  if (isNaN(convertedValue)) {
    console.log('Missing size');
  } else {
    for (let index = 0; index < convertedValue; index++) {
      let counter = 0;
      let row = '';
      while (counter < convertedValue) {
        row += 'X';
        counter++;
      }
      console.log(row);
    }
  }
}
