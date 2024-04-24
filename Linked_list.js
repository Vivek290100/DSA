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
                node.next = this.Head            //30,20,10
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
            let prev = this.Head                //10,20,30
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }


     //insert, index
     insert(value, index){
        if (index < 0 || index > this.size) {
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.Head
            for (let i = 0; i < index-1; i++) {  //List.insert(50,2)
                 prev = prev.next                //10,20,50,30
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
     }


     remove(index){
        if(index < 0 || index >= this.size){
            return null
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




