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
    insert(value){
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

    reverse(){
        let next = null
        let current = this.head
        let prev = null

        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
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
List.insert(23);
List.insert(3);
List.insert(2);
List.print()
List.reverse()
List.print()

