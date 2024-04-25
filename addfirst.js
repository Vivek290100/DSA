class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    addFirst(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }
}

List = new LinkedList
List.addFirst(3)
List.addFirst(2)
List.addFirst(1)
console.log(List);