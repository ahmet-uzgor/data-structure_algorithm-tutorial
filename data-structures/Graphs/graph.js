// Graphs --> Directed & Undirected
// Graphs --> Weighted & Unweighted
// Graphs --> Cyclic & Acyclic

// Directed Acyclic Graph --> DAG

// To represent Graph in the below , there are 3 different ways of doing this
//   0 --> 2 --> 1
//         |     |
//         ----> 3 
//Edge List
const graphEdge = [[0, 2], [2, 1], [2, 3], [1, 3]] ;

//Adjacent List
const graphAdj = [[2],[2,3],[0,1,3],[1,2]] ;

//Adjacent Matrix --> it keeps node connection status as 1 or 0
const graphAdjMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];


