//linked list => 10 --> 5 --> 16


//Singly Linked list creation with classes
class DoublyLinkedNode{ // Creation nodes of Singly DoublyLinkedList with classes
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    };
    get value(){ // getter method for value
        return this._value;
    }
    set value(value){ // setter method to set value
        if(!value){
            console.log("you should enter a value");
            return ;
        };
        this._value = value;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null ,
            prev : null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){ // it appends given value to end of Linked List
        const newNode = new DoublyLinkedNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this;
    }
    prepend(value){ //It adds given value to head of Linked List
        const prepenNode =new DoublyLinkedNode(value);
        prepenNode.next = this.head ;
        this.head.prev = prepenNode ;
        this.head = prepenNode ;
        this.length++;
        return this;
    }
    printList(){ // it adds all value inside of nodes to arr1 and prints arr1
        const arr1 = [];
        let currentNode = this.head ;
        while(currentNode !== null){
            arr1.push(currentNode.value);
            currentNode = currentNode.next;
        };
        return arr1;
    }
    insert(index , value){
        //check parameters
        if(index === 0){
            return this.prepend(value);
        }
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new DoublyLinkedNode(value);
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode ;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode ;
        this.length++;
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head ;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){ // Doubly feature will be added prev is missing
        //check parameters
        if(index === 0){
            this.head = this.head.next;
            this.length--;
            return ;
        }
        if(index >= this.length){
            index = this.length ;
        }
        const leader = this.traverseToIndex(index - 1);
        const deletedNode = leader.next;
        leader.next = deletedNode.next;
        this.length--
        return this.printList();
    }
}

const firstDoublyLinkedList = new DoublyLinkedList(1);
firstDoublyLinkedList.append(10);
firstDoublyLinkedList.append(5);
firstDoublyLinkedList.append(16);
firstDoublyLinkedList.insert(50,77);
firstDoublyLinkedList.insert(0,33);
firstDoublyLinkedList.insert(3 ,26);
firstDoublyLinkedList.remove(0); // it removes first item
console.log(firstDoublyLinkedList.printList());