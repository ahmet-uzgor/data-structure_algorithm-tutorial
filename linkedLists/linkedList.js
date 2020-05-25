//Doubly Linked list creation with classes
class LinkNode{ // Creation nodes of Singly linkedList with classes
    constructor(value){
        this.value = value;
        this.next = null;
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

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){ // it appends given value to end of Linked List
        const newNode = new LinkNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this;
    }
    prepend(value){ //It adds given value to head of Linked List
        const prepenNode =new LinkNode(value);
        prepenNode.next = this.head ;
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
        const newNode = new LinkNode(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode ;
        newNode.next = holdingPointer;
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
    remove(index){
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
    printReverse(){
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

const firstLinkedList = new LinkedList(1);
firstLinkedList.append(10);
firstLinkedList.append(5);
firstLinkedList.append(16);
firstLinkedList.insert(50,77);
firstLinkedList.insert(0,33);
firstLinkedList.insert(3 ,26);
firstLinkedList.remove(0); // it removes first item
console.log(firstLinkedList.printList(),firstLinkedList.printReverse());