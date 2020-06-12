// BFS is breadth first search it goes left to right in a tree
// and goes until last item.

//To create binary search tree
class Node{
    constructor(value){
        this.value = value;
        this.left = null ;
        this.right = null ;
    }
}

class BinarySearchTrees{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode =new Node(value);
        if(this.root === null){
            this.root = newNode
        }else{
            let scanNode = this.root ;
            while(true){
                if(value < scanNode.value){
                    //Add to left of node
                    if(!scanNode.left){
                        scanNode.left = newNode ;
                        return this;
                    }
                    scanNode = scanNode.left;
                }else{
                    //Add to right of node
                    if(!scanNode.right){
                        scanNode.right = newNode ;
                        return this;
                    }
                    scanNode = scanNode.right ;
                }
            }
        }
    }
    lookup(value){
        if(!this.root){
            return false;
        }
        let scanNode = this.root ;
        while(scanNode){
            if(value < scanNode.value){
                scanNode = scanNode.left ;
            }else if(value > scanNode.value){
                scanNode = scanNode.right ;
            }else if(scanNode.value === value){
                return scanNode;
            }
        }
        return false;
    }
    breadthFirstSearch(){
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while(queue.length > 0){
            currentNode = queue.shift();
            //console.log(currentNode.value); it shows 1 by 1 elements
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list;
    }
}

const newTree = new BinarySearchTrees();
newTree.insert(15);
newTree.insert(13);
newTree.insert(17);
newTree.insert(50);
newTree.insert(12);
newTree.insert(32);
newTree.breadthFirstSearch();
JSON.stringify(traverse(newTree.root));



function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}