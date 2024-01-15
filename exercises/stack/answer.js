class Stack {
    constructor(){
        this.data = [];
    }
    push(val) {
        this.data.push(val);
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        const dataArr = this.data;
        return dataArr[dataArr.length - 1];
    }
}