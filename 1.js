//Define node class 
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

//Define linked list class
class LinkedList{
    constructor(){
        this.Head = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

}

const List = new LinkedList
console.log(List.isEmpty());
console.log(List.getSize());