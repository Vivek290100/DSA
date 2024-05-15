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
                root.left = newNode
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

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}


const bst = new BinarySarrchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


bst.levelOrder()