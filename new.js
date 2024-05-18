// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySarrchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root, newNode){
//         if(newNode.value < root.value){
//             if(root.left == null){
//                 root.left = newNode
//             }else{
//                 return this.insertNode(root.left, newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 return this.insertNode(root.right, newNode)
//             }
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)

//         }
//     }

//     max(){

//     }
// }

// const bst = new BinarySarrchTree()

// bst.insert(10)
// bst.insert(30)
// bst.insert(20)

// bst.inOrder(bst.root)







class Node{
    constructor(){
        this
    }
}