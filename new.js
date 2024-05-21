class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySarrchTree{
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
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }else{
            if(this.root.value === value){
                return true
            }else if(root.value > value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }

    min(root=this.root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root=this.root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    postorder(root){
        if(root){
            this.preorder(root.left)
            this.preorder(root.right)
            console.log(root.value);
        }
    }
}


const bst = new binarySarrchTree()


bst.insert(10)
bst.insert(40)
bst.insert(30)
bst.insert(20)

console.log(bst.search(bst.root, 30));

console.log(bst.max());
console.log(bst.min());

bst.inorder(bst.root)
bst.preorder(bst.root)
bst.postorder(bst.root)