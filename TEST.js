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
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(",")}`);
        }
    }

    bfs(start){
        const queue = [start]
        const result = []
        const visited = []
        visited[start] = true

        while(queue.length){
            let vertex = queue.shift()
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    queue.push(neighbor)
                    visited[neighbor] = true
                }
            })
        }
        return result
    }

    dfs(start){
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList

        function dfsfunction(vertex){
            if(!vertex)return
            result.push(vertex)
            visited[vertex] = true

            adjacencyList[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    dfsfunction(neighbor)
                }
            })
        }
        dfsfunction(start)
        return result
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdges('A','C')
graph.addEdges('B','D')
graph.addEdges('C','A')

// graph.display()

console.log(graph.bfs('A'));
console.log(graph.dfs('A'));