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

    //add new node at beginning 
    prepend(value){
        const node = new Node(value)
            if(this.isEmpty()){
                this.Head = node
            }else{
                node.next = this.Head
                this.Head = node
            }
            this.size++
        }
    
    // append
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.Head = node
        }else{
            let prev = this.Head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }


     //insert
     insert(value, index){
        if (index < 0 || index > this.size) {
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.Head
            for (let i = 0; i < index-1; i++) {
                 prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
     }


    print(){
        if (this.isEmpty()) {
            console.log('list is empty');
        }else{
            let curr = this.Head
            let ListValues = ''
            while (curr) {
                ListValues += `${curr.value} `
                curr = curr.next
            }
            console.log(ListValues);
        }
    }
}

const List = new LinkedList
console.log(List.isEmpty());
console.log(List.getSize());
List.append(10)
List.append(20)
List.append(30)
List.append(40)
List.insert(10, 2)
List.print()
console.log(List.getSize());




