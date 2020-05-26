class LinkedNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0; 
    }
    peek(){ // it shows first item of queue
        return this.first;
    }
    enqueue(value){ // it adds an item to front of queue
        const newNode = new LinkedNode(value);
        if(this.length === 0){
            this.first = newNode ;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++;
        return this;

    }
    dequeue(){ // it removes first item of queue
        if(!this.first){
            return null;
        }
        if(!this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue;
myQueue.enqueue("Ahmet");
myQueue.enqueue("Mehmet");
myQueue.enqueue("Cemal");
myQueue.enqueue("Joy");
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);
