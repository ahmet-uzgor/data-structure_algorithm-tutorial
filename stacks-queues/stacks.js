class LinkNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }

    get value(){
        return this._value;
    }

    set value(setValue){
        if(!setValue){
            console.log("you should enter a value");
            return ;
        };
        this._value = setValue;
    }
}


class Stack{ // it creates stack which is LIFO => Last in First Out
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length= 0;
    }
    peek(){ // it shows the element which is in the top
        return this.top;     
    }
    push(value){ // It adds data to the top of stacks
        const lastItem = new LinkNode(value);
        if(this.length === 0){
            this.bottom = lastItem;
            this.top = lastItem;
            this.length++;
            return ;
        }else {
            const holdingPointer = this.top;
            this.top = lastItem;
            this.top.next = holdingPointer;
        } 
        this.length++;
        return this;
    }
    pop(){ // it removes last element of stacks
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('Medium');
myStack.pop();
myStack.peek();
console.log(myStack);


//Stacks creation with Arrays;
class Stack2{ // it creates stack which is LIFO => Last in First Out
    constructor(){
        this.length = 0;
        this.arr1 = [];
    }
    peek(){ // it shows the element which is in the top
        return this.arr1[this.length-1];     
    }
    push(value){ // It adds data to the top of stacks
        this.arr1.push(value);
        this.length++;
    }
    pop(){ // it removes last element of stacks
        if(this.length===0){
            console.log("There is no element to remove");
        }
        delete this.arr1[this.length-1];
        this.length--;
    }
}

const myStack2 = new Stack2();
myStack2.push('1');
myStack2.push('2');
myStack2.push('3');
console.log(myStack2);
myStack2.pop();
console.log(myStack2.peek()) ;
