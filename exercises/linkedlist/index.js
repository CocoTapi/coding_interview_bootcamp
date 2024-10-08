// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
  
    insertFirst(data) {
       this.head = new Node(data, this.head);
    }

    size(){
       let count = 0;
       let current = this.head;

       while (current) {
        count++;
        current = current.next;
       }

       return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) return null;
        
      let currentLast = this.head;

      while(currentLast.next) {
        currentLast = currentLast.next;
      }

      return currentLast;
    }


    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next; 
    }

    removeLast() {
       if(!this.head) return;

       if(!this.head.next) {
        this.head = null;
        return;
       } 

       let previous = this.head;
       let last = this.head.next;

       while(last.next) {;
        previous = last;
        last = last.next;
       }

       previous.next = null;
       return;
    }
    insertLast(val) {
        const newNode = new Node(val, null);

        if(!this.head) {
            this.head = newNode;
        }

        let last = this.head;

        while(last.next) {
            last = last.next;
        }

        last.next = newNode;
    }
    getAt(index){
        let counter = 0
        let node = this.head;
        while(node) {
            if (counter === index) {
                return node;
            } 

            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(index) {
       
    }
    insertAt(data, index) {
       
    }
    forEach(fn) {
        
    }

    //for...of
    
}

module.exports = { Node, LinkedList };
