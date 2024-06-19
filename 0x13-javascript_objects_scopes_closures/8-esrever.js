#!/usr/bin/node

exports.esrever = function (list) {
  const reversedArray = [];
  let indRA = 0;
  for (let ind = (list.length - 1); ind >= 0; ind--) {
    reversedArray[indRA] = list[ind];
    indRA++;
  }
  return (reversedArray);
};
