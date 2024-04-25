//addFirst and print
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

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    addFirst(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }else{
            let current = this.head
            while (current) {
              console.log(current.value ); 
              current = current.next
            }
        }
    }
}

List = new LinkedList
console.log(List.isEmpty());
console.log(List.getSize());
List.addFirst(30)
List.addFirst(20)
List.addFirst(10)
List.print()