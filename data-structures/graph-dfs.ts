class Graph {
    adjacencyList: {
        [index: string]: string[]
    };

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];

    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1)
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1: string, vertex2: string) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(el => el !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(el => el !== vertex1)
    }

    removeVertex(vertex: string) {
        this.adjacencyList[vertex].forEach((el) => {
            this.removeEdge(el, vertex)
        })
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start: string) {
        const result = [] as string[];
        const visited = {} as { [vertex: string]: boolean };
        const dfs = (vertex: string) => {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach((adjVertex: string) => {
                if (!visited[adjVertex]) dfs(adjVertex);
            })
        }
        dfs(start);
        return result;
    }

    depthFirstIterative(start: string) {
        const stack = [start] as string[];
        const visited = { [start]: true } as { [vertex: string]: boolean }
        const result = [] as string[];
        let currVertex: string;
        while (stack.length) {
            console.log(stack)
            currVertex = stack.pop()!;
            result.push(currVertex);
            this.adjacencyList[currVertex].forEach((adjVertex: string) => {
                if (!visited[adjVertex]) {
                    visited[adjVertex] = true;
                    stack.push(adjVertex)
                }
            }) 
        }
        return result;
    }
}

const g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

// console.log(g.depthFirstRecursive("A"))
console.log(g.depthFirstIterative("A"))