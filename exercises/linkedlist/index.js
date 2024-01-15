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
    insertFirst(data) {
        // const newNode = new Node(data, this.head);
        // this.head = newNode;

        this.head = new Node(data, this.head)
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
        return this.head;
    }
    getLast() {
        if (!this.head) return;
        let node = this.head;

        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }
        // if (!this.head) return null;
        // let node = this.head;
        // let last = null;

        // while(node) {
        //     last = node;
        //     node = node.next;
        // }

        // return last;
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
    getAt(num){
        //returns the node at the provided index
        if (!this.head && num > 0) return null;
        let index = 0
        let current = this.head;
        while(current) {
            if (index === num) {
                return current;
            } else {
                index++;
                current = current.next;
            }
        }
    }
}

module.exports = { Node, LinkedList };
