//impleent a topological sort given a directed unweighted graph.

const Deque = require('./collections/deque');

function topological_sort(vertices, edges) {
    const sortedOrder = [];
    if( vertices <= 0 ) {
        return sortedOrder;
    }
    //a. Initialize the graph
    const inDegree = Array(vertices).fill(0); //count of incoming edges
    const graph = Array(vertices).fill(0).map(()=>Array()); //adjacency list graph

    //b. Build the graph
    edges.forEach((edge) => {
        let parent = edge[0];
        let child = edge[1];
        graph[parent].push(child); //put the child into it's parents list
        inDegree[child]++; //increment child's inDegree
    })
    //c. Find all sources i.e. all vertices with a in-degrees
    const sources = new Deque();
    for(let i=0;i<inDegree.length;i++) {
        if(inDegree[i] == 0) {
            sources.push(i)
        }
    }

    //d. For each source, add it to the sortedOrder and subtract one from all of it;s childrens in-degrees
    //if a child's in-degree becomes zxero, add it to the sources menu
    // 
}