class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }
    add(data) {
        const newNode = new Node(data);
        this.children.push(newNode);
    }
    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            //you can do this using for loop
            arr.push(...node.children);
            fn(node);
        }
    }
    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }
}