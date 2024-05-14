class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySarrchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
       return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.node = newNode
            }else{
                return this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                return this.insertNode(root.right, newNode)
            }
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}


bst = new BinarySarrchTree()

bst.insert(11)
bst.insert(21)
bst.insert(31)
bst.insert(41)

bst.postOrder(bst.root)