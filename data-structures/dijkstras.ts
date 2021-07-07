class PriorityQueue {
    values: { val: string, priority: number }[];
    constructor() {
        this.values = [];
    }
    enqueue(val: string, priority: number) {
        this.values.push({val,priority});
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    };
}

class WeightedGraph {
    adjacencyList: {
        [node: string]: {
            node: string, 
            weight: number
        }[]
    }
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node: string) {
        if (!this.adjacencyList[node]) this.adjacencyList[node] = [];
    }

    addEdge(node1: string, node2: string, weight: number) {
        this.adjacencyList[node1].push({
            node: node2,
            weight: weight
        })
        this.adjacencyList[node2].push({
            node: node1,
            weight: weight
        })
    }

    dijkstras(startNode: string, endNode: string) {
        const distances = {[startNode]: 0} as {[node: string]: number}
        const previous = {} as {[node: string]: string | null};
        const priorityQueue = new PriorityQueue();
        for (let node in this.adjacencyList) {
            if (!distances[node]) distances[node] = Infinity;
            priorityQueue.enqueue(node, distances[node]);
            previous[node] = null;
        }
        while (priorityQueue.values.length) {
            const currNode = priorityQueue.dequeue()!
            if (currNode.val === endNode) return distances[currNode.val]; // check what to return
            this.adjacencyList[currNode.val].forEach((adjNode) => {
                let distance = distances[currNode.val] + adjNode.weight;
                if (distance < distances[adjNode.node]) {
                    distances[adjNode.node] = distance;
                    previous[adjNode.node] = currNode.val;
                    priorityQueue.enqueue(adjNode.node, distance)
                }
            })

        }
    }
}

const graph = new WeightedGraph()

graph.addNode("A")
graph.addNode("B")
graph.addNode("C")

graph.addEdge("A", "B", 9)
graph.addEdge("A", "C", 5)
graph.addEdge("C", "B", 7)
 
console.log(graph.dijkstras("A", "E"))