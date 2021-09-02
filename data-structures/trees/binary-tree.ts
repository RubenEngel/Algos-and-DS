class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: number): BinarySearchTree {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    function traverse(next: TreeNode): Boolean {
      if (newNode.value === next.value) return false;
      if (newNode.value < next.value) {
        if (next.left) {
          return traverse(next.left);
        } else {
          next.left = newNode;
          return true;
        }
      } else {
        if (next.right) {
          return traverse(next.right);
        } else {
          next.right = newNode;
          return true;
        }
      }
    }
    traverse(this.root);
    return this;
  }
  find(target: number): TreeNode | false {
    if (!this.root) {
      return false;
    }
    function search(next: TreeNode): TreeNode | false {
      if (target === next.value) {
        return next;
      } else if (target < next.value) {
        if (next.left) return search(next.left);
        else return false;
      } else {
        if (next.right) return search(next.right);
        else return false;
      }
    }
    return search(this.root);
  }
  bfs() {
    if (!this.root) return null;
    let currNode = this.root;
    const visited: TreeNode[] = [];
    const queue: TreeNode[] = [];
    queue.push(currNode);
    while (queue.length > 0) {
      currNode = queue.shift()!;
      visited.push(currNode);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    return visited.map((node) => node.value);
  }
  dfsPreOrder() {
    if (!this.root) return false;
    const visited: TreeNode[] = [];
    const currNode = this.root;
    function traverse(node: TreeNode) {
      visited.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(currNode);
    return visited.map((node) => node.value);
  }
  dfsPostOrder() {
    if (!this.root) return false;
    const visited: TreeNode[] = [];
    const currNode = this.root;
    function traverse(node: TreeNode) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node);
    }
    traverse(currNode);
    return visited.map((node) => node.value);
  }
  dfsInOrder() {
    if (!this.root) return false;
    const visited: TreeNode[] = [];
    const currNode = this.root;
    function traverse(node: TreeNode) {
      if (node.left) traverse(node.left);
      visited.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(currNode);
    return visited.map((node) => node.value);
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.dfsInOrder());
