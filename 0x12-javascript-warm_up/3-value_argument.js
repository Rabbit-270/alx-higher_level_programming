#!/usr/bin/node

const process = require('node:process');
let argCount = 0;
while (process.argv[argCount]) {
  argCount++;
}
argCount = argCount - 2;
if (argCount === 0) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
