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

  rotate () {
    const tempWidth = this.width;
    const tempHeight = this.height;
    this.width = tempHeight;
    this.height = tempWidth;
  }

  double () {
    const doubleWidth = this.width * 2;
    const doubleHeight = this.height * 2;
    this.width = doubleWidth;
    this.height = doubleHeight;
  }
}

module.exports = Rectangle;
