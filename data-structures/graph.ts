class Graph {
    adjacencyList: {
        [index: string]: string[]
    };

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        
        console.log(this.adjacencyList)
    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1)
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)

        console.log(this.adjacencyList)
    }

    removeEdge(vertex1: string, vertex2: string) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(el => el !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(el => el !== vertex1)

        console.log(this.adjacencyList)
    }

    removeVertex(vertex: string) {
        this.adjacencyList[vertex].forEach((el) => {
            this.removeEdge(el, vertex)
        })
        delete this.adjacencyList[vertex]

        console.log(this.adjacencyList)
    }
}

const graph1 = new Graph()

graph1.addEdge('Tokyo', 'London')

graph1.addEdge('New York', 'London')

graph1.removeEdge('London', 'Tokyo')

graph1.addEdge('Berlin', 'London')

graph1.removeVertex('London')