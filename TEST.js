// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarySarrchTree{
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
//         if(root.value > newNode.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }

//     search(root, value){
//         if(!root){
//             return false
//         }else{
//             if(root.value == value){
//                 return true
//             }else if(root.value > value){
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right, value)
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

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     min(root = this.root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root = this.root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     levelOrder(){
//         const arr = []
//         arr.push(this.root)
//         while(arr.length){
//             let curr = arr.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 arr.push(curr.left)
//             }
//             if(curr.right){
//                 arr.push(curr.right)
//             }
//         }
//     }


// }

// const bst = new binarySarrchTree()

// bst.insert(10)
// bst.insert(30)
// bst.insert(20)

// bst.inOrder(bst.root)
// bst.preOrder(bst.root)
// bst.preOrder(bst.root)

// console.log(bst.search(bst.root, 10));
// console.log(bst.min());
// console.log(bst.max());

// bst.levelOrder()







// class Node{
//     constructor(){
//         this.children = []
//         this.endWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.endWord = true
//     }

//     search(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//              currentNode = currentNode.children[char]
//         }
//         return currentNode.endWord
//     }

//     startwith(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return true
//     }
// }

// const trie = new Trie()

// trie.insert('bike')
// trie.insert('car')
// trie.insert('bus')

// console.log(trie.search('bike'));
// console.log(trie.startwith('b'));



// class Node{
//     constructor(){
//         this.children = {}
//         this.endword = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }
    
//     insert(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         currentNode.endword = true
//     }

//     search(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char] = new Node()
//             }
//             currentNode = currentNode.children[char]
//         }
//         return currentNode.endword
//     }

//     startwith(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode = currentNode.children[char]
//         }
//         return true
//     }

//     autoComplete(word){
//         let currentNode = this.root
//         for(const char of word){
//             if(!currentNode.children[char]){
//                 return []
//             }
//             currentNode = currentNode.children[char]
//         }
//         let list = []
//         this.collectWord(currentNode, word, list)
//         return list
//     }

//     collectWord(node, word, list){
//         if(node.endword){
//             list.push(word)
//         }
//         for(let char in node.children){
//             this.collectWord(node.children[char], word+char, list)
//         }
//     }
// }


// const trie = new Trie()

// trie.insert('one')
// trie.insert('two')
// trie.insert('thirty')
// trie.insert('onece')


// console.log(trie.search('one'));

// console.log(trie.startwith('o'));

// console.log(trie.autoComplete('o'));


class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySarrchTree{
    constructor(){
        this.root  = null
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

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
}

const bst = new BinarySarrchTree()

bst.insert(10)
bst.insert(30)
bst.insert(20)

bst.inorder(bst.root)