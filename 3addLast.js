class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    addLast(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }   

    print(){
        if(this.isEmpty()){
            console.log('Empty list');
        }else{
            let current = this.head
            while(current){
                console.log(current.value);
                current = current.next
            }
            
        }
    }
}
List = new LinkedList
List.addLast(30)
List.addLast(20)
List.addLast(10)
List.print()