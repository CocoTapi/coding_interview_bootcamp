// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor(data) {
    this.data = [];
  }
  add(val) {
    this.data.push(val);
  }
  remove() {
    return this.data.shift();
  }
  peek() {
    const arr = this.data;
    return arr[0];
  }
}

module.exports = Queue;
