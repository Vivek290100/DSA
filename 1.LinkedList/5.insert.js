class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    add(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('its empty');
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
List.add(23);
List.add(3);
List.add(2);
List.print()

