#!/usr/bin/node
const FirstSquare = require('./5-square');

class Square extends FirstSquare {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let height = 0; height < this.height; height++) {
      let row = '';
      for (let width = 0; width < this.width; width++) {
        row += c;
      }
      console.log(row);
    }
  }
}
module.exports = Square;
