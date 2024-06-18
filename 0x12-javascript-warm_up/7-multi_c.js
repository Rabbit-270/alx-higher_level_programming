#!/usr/bin/node

const process = require('node:process');

const ARGS = process.argv.length - 2;
if (ARGS === 0 || isNaN(Number(process.argv[2]))) {
  console.log('Missing number of occurences');
} else {
  const loopTimes = Number(process.argv[2]);
  let index = 0;
  while (index < loopTimes) {
    console.log('C is fun');
    index++;
  }
}
