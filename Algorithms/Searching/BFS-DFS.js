// BFS is breadth first search it goes left to right in a tree
// and goes until last item.I will be used for shortest path
// DFS is depth first search. It will be used for does element exist or not ?

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
    DFSInorder(){
        return traverseInorder(this.root, []);
    }
    DFSPostorder(){
        return traversePostorder(this.root, []);
    }
    DFSPreorder(){
        return traversePreorder(this.root, []);
    }
}

function traverseInorder(node, list){
    if(node.left){
        traverseInorder(node.left, list);
    }
    list.push(node.value)
    if(node.right){
        traverseInorder(node.right, list);
    }
    return list;
}

function traversePreorder(node, list){
    list.push(node.value)
    if(node.left){
        traversePreorder(node.left, list);
    }
    if(node.right){
        traversePreorder(node.right, list);
    }
    return list;
}

function traversePostorder(node, list){
    if(node.left){
        traversePostorder(node.left, list);
    }
    if(node.right){
        traversePostorder(node.right, list);
    }
    list.push(node.value);
    return list;
}

const newTree = new BinarySearchTrees();
newTree.insert(9);
newTree.insert(4);
newTree.insert(1);
newTree.insert(6);
newTree.insert(21);
newTree.insert(15);
newTree.insert(43);
//newTree.breadthFirstSearch();
JSON.stringify(traverse(newTree.root));
console.log("Inorder result is",newTree.DFSInorder());
console.log("Preorder result is",newTree.DFSPreorder());
console.log("Postorder result is",newTree.DFSPostorder());



function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}