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
        this.head = null;
    }

    //don't forget the current head goes next!!!
    insertFirst(data) {
        //Answer 1
        // const newNode = new Node(data, this.head);
        // this.head = newNode;

        //answer 2
        //this.head = new Node(data, this.head)

        //answer 3
        this.insertAt(data, 0);
    }
    size(){
        let counter = 0;
        let node = this.head;
        
        while(node) {
            counter++;
            node = node.next;
        }

        return counter;
    }
    getFirst() {
        //answer 1
        //return this.head;

        //answer 2
        return this.getAt(0);
    }
    getLast() {
        //answer 1
        // if (!this.head) return;
        // let node = this.head;

        // while(node) {
        //     if(!node.next) {
        //         return node;
        //     }
        //     node = node.next;
        // }

        //answer 2
        // if (!this.head) return null;
        // let node = this.head;
        // let last = null;

        // while(node) {
        //     last = node;
        //     node = node.next;
        // }

        // return last;

        //answer 3
        return this.getAt(this.size() - 1);
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) return null;
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let lastNode = this.head.next;

        while(lastNode.next) {
            previous = lastNode;
            lastNode = lastNode.next;
        }
        previous.next = null;
    }
    insertLast(val) {
        let currentLast = this.getLast();
        if(currentLast) {
            currentLast.next = new Node(val);
        } else {
            this.head = new Node(val);
        }  
    }
    getAt(index){
        //returns the node at the provided index
        if (!this.head) return null;
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
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) return;
        previous.next = previous.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(data, previous.next);
        previous.next = newNode;
    }
    forEach(fn) {
        let node = this.head;
        let counter = 0; 
        while(node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    //for ...of 
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

