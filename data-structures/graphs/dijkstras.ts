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
        // object to track smallest distance to each node
        const distances = {} as {[node: string]: number}
        // object to track the previous node that gives shortest distance
        const previous = {} as {[node: string]: string | null};
        // create a priority queue
        const nodes = new PriorityQueue();
        // populate the defined objects and priority list with default values
        for (let node in this.adjacencyList) {
            if (node === startNode) {
                distances[node] = 0;
            } else {
                distances[node] = Infinity;
            };
            nodes.enqueue(node, distances[node]);
            previous[node] = null;
        }
        // while the priority queue is not empty
        while (nodes.values.length) {
            let smallestNode = nodes.dequeue()!.val
            if (smallestNode === endNode) {
                let route = [] as string[];
                let routeNode = endNode;
                while (route[0] !== startNode) {
                    // Build path to return by working back on 'previous' object
                    route.unshift(routeNode);
                    routeNode = previous[routeNode]!;
                }
                return [route, distances[endNode]];
            };
            // Check the distances to the neighbouring nodes
            if (distances[smallestNode] !== Infinity) {
                this.adjacencyList[smallestNode].forEach((adjNode) => {
                    let distance = distances[smallestNode] + adjNode.weight;
                    // if neighbouring nodes can be got to in less distance
                    if (distance < distances[adjNode.node]) {
                        // update distances object
                        distances[adjNode.node] = distance;
                        // update the node required to travel through
                        previous[adjNode.node] = smallestNode;
                        // add to priority list
                        nodes.enqueue(adjNode.node, distance)
                    }
                })
            }

        }
    }
}

const graph = new WeightedGraph()

graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("D")
graph.addNode("E")
graph.addNode("F")

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
 
console.log(graph.dijkstras("A", "F"))