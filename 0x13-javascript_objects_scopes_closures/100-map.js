#!/usr/bin/node
const list = require('./100-data').list;
console.log(list);
const mappedArray = list.map((item, index) => {
  return (item * index);
});
console.log(mappedArray);
