#!/usr/bin/node

const process = require('node:process');
const Args = process.argv.length - 2;
if (Args === 0) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
