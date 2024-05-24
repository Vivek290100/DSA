class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
        }
    }
}



const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')


graph.addEdges('A', 'B')
graph.addEdges('B', 'D')
graph.addEdges('C', 'A')
graph.addEdges('E', 'C')

graph.display()