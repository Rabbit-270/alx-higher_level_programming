#!/usr/bin/node

const process = require('node:process');

const ArgsCount = process.argv.length - 2;
if (ArgsCount === 0) {
  console.log('No argument');
} else if (ArgsCount === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
