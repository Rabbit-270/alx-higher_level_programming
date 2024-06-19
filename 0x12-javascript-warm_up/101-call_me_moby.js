#!/usr/bin/node

exports.callMeMoby = function (x, theFunction) {
  let counter = 1;
  while (counter <= x) {
    theFunction();
    counter++;
  }
};
