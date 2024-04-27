class Node{
    constructor(value){
        this.value = value
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

    add(value){
        const NewNode = new Node(value)
        if(this.isEmpty()){
            this.head = NewNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = NewNode
        }
        this.size++
    }

    toArray(){
        const array = []
        let current = this.head
        while(current){
            array.push(current.value)
            current = current.next
        }
        return array
    }

    // print(){
    //     if(this.isEmpty()){
    //         console.log('emppty');
    //     }else{
    //         let current = this.head
    //         while(current){
    //             console.log(current.value);
    //             current = current.next
    //         }
    //     }
    // }
}

List = new LinkedList
List.add(10)
List.add(20)
List.add(30)
// List.print()
console.log(List.toArray());
