#!/usr/bin/node
const Rectangle = require('./1-rectangle');

const r1 = new Rectangle(2, 3);
console.log(r1);
console.log(r1.height);
console.log(r1.width);

const r2 = new Rectangle(2, -3);
console.log(r2);
console.log(r2.height);
console.log(r2.width);

const r3 = new Rectangle(2);
console.log(r3);
console.log(r3.height);
console.log(r3.width);
