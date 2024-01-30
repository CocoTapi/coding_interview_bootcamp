class Queue {
    constructor() {
        this.data = [];
      }
    
      add(record) {
        this.data.unshift(record);
      }
    
      remove() {
        return this.data.pop();
      }
      peek() {
        const dataArr = this.data;
        return dataArr[dataArr.length - 1];
    }
}

/*
1. make a new empty queue
2. while souceOne or sourceTwo has a node,
    a. if sourceOne has a node
        i. remove a node from sourceOne and add it into the new Queue
    b. if sourceTwo has a node
        i. remove a node from sourceTwo and add it into the new Queue
3. return the new Queue
*/

function weave(sourceOne, sourceTwo) {
    const q = new Queue;

    while(sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }
    return q;
}