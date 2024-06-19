#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let height = 0; height < this.height; height++) {
      let row = '';
      for (let width = 0; width < this.width; width++) {
        row += 'X';
      }
      console.log(row);
    }
  }
}

module.exports = Rectangle;
