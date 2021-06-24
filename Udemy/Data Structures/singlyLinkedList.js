class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if (this.length === 0) { 
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;

    }
    pop() {
        if (this.length === 0) return undefined
        // find the second last and last node in list
        var currNode = this.head;
        var newTail = currNode;
        while (currNode.next) {
            newTail = currNode;
            currNode = newTail.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null
            this.head = null
        }
        return currNode;
    }
}

var list = new SinglyLinkedList()

list.push('hello')
list.push('there')
list.push('my')
list.push('friend')
list.pop()
list.pop()
list.pop()
list.pop()
console.log(list.pop())
console.log(list)