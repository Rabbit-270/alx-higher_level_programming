#!/usr/bin/node

exports.esrever = function (list) {
  let reversedArray = [];
  let indRA = 0;
  for (let ind = (list.length - 1); ind >= 0; ind--) {
    reversedArray[indRA] = list[ind];
    indRA++;
  }
  return (reversedArray);
};
