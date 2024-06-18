#!/usr/bin/node

const process = require('node:process');

const ARGS = process.argv.length - 2;
if (ARGS === 0) {
  console.log('Not a number');
} else {
  const Arg = process.argv[2];
  const convertedValue = Number(Arg);
  if (!convertedValue) {
    console.log('Not a number');
  } else {
    console.log('My number: ' + convertedValue);
  }
}
