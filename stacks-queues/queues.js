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

// Queues building with Arrays
class Queue2{
    constructor(){
        this.array = [];
        this.length = 0;
    }
    peek(){
        return this.array[0]
    }
    enqueue(value){
        this.array[this.length-1] = value;
        this.length++;
        return this;
    }
    dequeue(){
        delete this.array[this.length-1];
        this.length--;
    }
}

const myQueue2 = new Queue2;
myQueue2.enqueue("Veli");
myQueue2.enqueue("Ali");
myQueue2.enqueue("Selim");
myQueue2.enqueue("Andrei");
myQueue2.dequeue();
console.log(myQueue2.peek());
console.log(myQueue2);