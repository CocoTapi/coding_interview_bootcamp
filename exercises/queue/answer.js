//1
class Queue {
    constructor(){
        this.data = [];
    }
    add(val){
        this.data.unshift(val);
    }
    remove(){
        return this.data.pop();
    }
}