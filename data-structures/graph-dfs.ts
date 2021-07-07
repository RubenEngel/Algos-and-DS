class Graph {
    adjacencyList: {
        [index: string]: string[]
    };

    constructor() {
        this.adjacencyList = {};
    }

    addNode(node: string) {
        if (!this.adjacencyList[node]) this.adjacencyList[node] = [];

    }

    addEdge(node1: string, node2: string) {
        if (!this.adjacencyList[node1]) this.addNode(node1)
        if (!this.adjacencyList[node2]) this.addNode(node2)
        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)
    }

    removeEdge(node1: string, node2: string) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(el => el !== node2)
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(el => el !== node1)
    }

    removeNode(node: string) {
        this.adjacencyList[node].forEach((el) => {
            this.removeEdge(el, node)
        })
        delete this.adjacencyList[node]
    }

    depthFirstRecursive(startNode: string) {
        const result = [] as string[];
        // const visited = {} as { [node: string]: boolean };
        const dfs = (node: string) => {
            // visited[node] = true;
            result.push(node);
            // this.adjacencyList[node].forEach((adjNode: string) => {
            //     if (!visited[adjNode]) dfs(adjNode);
            // })
            this.adjacencyList[node].forEach((adjNode: string) => {
                if (!result.includes(adjNode)) dfs(adjNode);
            })
        }
        dfs(startNode);
        return result;
    }

    depthFirstIterative(startNode: string) {
        const stack = [startNode] as string[];
        const seen = { [startNode]: true } as { [node: string]: boolean }
        const result = [] as string[];
        let currNode: string;
        while (stack.length) {
            currNode = stack.pop()!;
            result.push(currNode);
            this.adjacencyList[currNode].forEach((adjNode: string) => {
                if (!seen[adjNode]) {
                    seen[adjNode] = true;
                    stack.push(adjNode)
                }
            }) 
        }
        return result;
    }

    breadthFirstSearch(startNode: string) {
        const queue = [] as string[];
        const result = [] as string[];
        const seen = {} as {[node: string]: boolean}
        seen[startNode] = true;
        queue.push(startNode);
        while (queue.length) {
            let currNode = queue.shift() as string;
            result.push(currNode);
            this.adjacencyList[currNode].forEach((adjNode: string) => {
                if (!seen[adjNode]) {
                    seen[adjNode] = true;
                    queue.push(adjNode)
                }
            })
        }
        return result;
    }
}

const g = new Graph()

g.addNode("A")
g.addNode("B")
g.addNode("C")
g.addNode("D")
g.addNode("E")
g.addNode("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(g.depthFirstRecursive("A"))
// console.log(g.depthFirstIterative("A"))
// console.log(g.breadthFirstSearch("A"))