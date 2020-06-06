// Root -- Parent -- Child -- Leaf -- Sibling
// Big O ==> O(logN) BST --> Binary Search Trees
// Balnced and Unbalanced BSTs are evaluated

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

    }
}

const newTree = new BinarySearchTrees();
newTree.insert(15);
newTree.insert(13);
newTree.insert(17);
JSON.stringify(traverse(newTree.root));

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}