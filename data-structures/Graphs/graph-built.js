// Note : Neo4j is one of the big graph database as a Service which is built via 
// Graph Data structure --> https://neo4j.com/
 

class Graph{ // Undirected - Unweighted Graph Creation
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1,node2){
        //Undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections(){ // it shows all connections between nodes . AdjacentList keeps connection data.
        const allNodes =  Object.keys(this.adjacentList);
        for(let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex ;
            for(vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

const newGraph = new Graph();
newGraph.addVertex('0');
newGraph.addVertex('1');
newGraph.addVertex('2');
newGraph.addVertex('3');
newGraph.addVertex('4');
newGraph.addVertex('5');
newGraph.addVertex('6');
newGraph.addVertex('7');
newGraph.addEdge('0','1');
newGraph.addEdge('0','2');
newGraph.addEdge('1','2');
newGraph.addEdge('1','3');
newGraph.addEdge('2','4');
newGraph.addEdge('3','4');
newGraph.addEdge('3','5');
newGraph.addEdge('4','6');
newGraph.addEdge('5','6');
newGraph.addEdge('6','7');
newGraph.showConnections();
