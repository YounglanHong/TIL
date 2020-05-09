/*** ES6 Class ***/
class Stack {
  constructor() {
    this.stack = {};
    this.key = 0;
  }
  push(value) {
    this.stack[this.key] = value;
    this.key++;
    // {0: 'val0', 1: 'val1', 2: 'val2'}
  }
  pop() {
    let length = Object.keys(this.stack).length;
    delete this.stack[length - 1];
  }
  size() {
    return Object.keys(this.stack).length;
  }
}
