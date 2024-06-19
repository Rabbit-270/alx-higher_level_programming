#!/use/bin/node
const FirstSquare = require('./5-square');

class Square extends FirstSquare {
  charPrint (c) {
    if (!c) {
    /*
     * c is undefined so use X. Call the parent's print method.
     */
      this.print();
    } else if (c === 'C') {
      for (let height = 0; height < this.height; height++) {
        let row = '';
        for (let width = 0; width < this.width; width++) {
          row += 'C';
        }
        console.log(row);
      }
    }
  }
}
module.exports = Square;
