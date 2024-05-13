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
}

const bst = new binarySarrchTree()
console.log(bst.isEmpty());