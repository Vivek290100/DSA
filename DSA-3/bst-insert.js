class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class bst{
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
        if(root.value > newNode.value){
            if(this.left === null){
                this.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(this.right === null){
                this.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
}

const bstree = new bst()

bstree.insert(10)
bstree.insert(20)
bstree.insert(30)