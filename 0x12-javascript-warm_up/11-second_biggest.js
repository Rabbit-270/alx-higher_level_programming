#!/usr/bin/node

function sort (a) {
  for (let outer = 0; outer < a.length; outer++) {
    let curr = a[outer];
    for (let inner = (outer); inner <= (a.length - 1); inner++) {
      if (curr > a[inner]) {
        const temp = curr;
        a[outer] = a[inner];
        curr = a[outer];
        a[inner] = temp;
        inner = outer - 1;
      }
    }
  }
  console.log(a);

  return (a);
}
const process = require('node:process');
const ARG_COUNT = process.argv.length - 2;
if (ARG_COUNT === 0) {
  console.log(0);
} else if (ARG_COUNT === 1) {
  console.log(0);
} else {
  const ARRAY = process.argv.slice(2);
  for (let b = 0; b < ARRAY.length; b++) {
    ARRAY[b] = Number(ARRAY[b]);
  }
  const sortedArray = sort(ARRAY);
  const convertedValue = Number(sortedArray[sortedArray.length - 2]);
  console.log(convertedValue);
}
