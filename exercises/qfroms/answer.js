class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(val) {
        this.first.push(val);
    }
    remove() {
        //movr items from stack A to stack B
        while(this.first.peek()) {
            const records = this.first.pop();
            this.second.push(records);
        }
        
        //this is what you return
        const targetRecord = this.second.pop();

        //move the rest of items in Stack B to stack A 
        while(this.second.peek()) {
            const records = this.second.pop();
            this.first.push(records);
        }

        return targetRecord;
    }
    peek() {
        while(this.first.peek()) {
            const records = this.first.pop();
            this.second.push(records);
        }

        const targetRecord = this.second.peek();

        while(this.second.peek()) {
            const records = this.second.pop();
            this.first.push(records);
        }

        return targetRecord;
    }
}