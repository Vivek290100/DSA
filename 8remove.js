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
        return this.size===0
    }

    insert(value){
        const newNode = new Node (value);
        if(this.isEmpty()){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    remove(){
        
    }

    print(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let current = this.head;
            while(current){
                console.log(current.value);
                current = current.next
            }
        }
    }

}


const List = new LinkedList()
List.insert(20)
List.insert(30)
List.insert(40)
List.print()