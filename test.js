// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head = null;
//     }


//     addFirst(value){
//         const newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return value
//     }


//     addLast(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode
//             return value
//         }

//         let current = this.head
//         while(current.next){
//             current = current.next
//         }
//         current.next = newNode
//         return value
//     }

    
// }

// const List = new LinkedList
// console.log(List.addFirst(2));
// console.log(List.addFirst(3));
// console.log(List.addLast(4));



function sum(n){
    if(n==0){
        return n
    }
    return n+sum(n-1)
}
console.log(sum(5));