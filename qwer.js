// class Node{
//     constructor(){
//         this.children = {}
//         this.endWord = false
//     }
// }

// class trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         if(!this.root){
//             let currentNode = this.root
//         }
//         for(const char of word){
//             if(!currentNode.children[char])
//                 currentNode = currentNode.children[char]
//             }
//         this.currentNode = currentNode.children[char]
//         currentNode.endWord = true
//     }

//     autoComplete(node, value){
//         if(!this.root){
//             let currentNode = this.root
//         }
//         for(const char of words){
//             if(!this.currentNode.children[char]){
//                 return empty
//             }

//             let list = []
//             return this.colletWord(this.currentNode.children[char], word+char, node)
//         }
//     }

//     colletWord(node, word, root){
//         if(!this.root){
//             list.push(word)
//         }

//         for(let char in node.children[char]){
//             return this.colletWord(word, node.children[char])
//         }
//     }
// }







class Node{
    constructor(){
        this.children = {}
        this.endword = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let currentNode = this.root
        for(const char of word){
            if(!currentNode.children[char]){
                currentNode.children[char] = new Node()
            }
            currentNode = currentNode.children[char]
        }
        currentNode.endword = true
    }

    search(word){
        let currentNode = this.root
        for(const char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode = currentNode.children[char]
        }
        return currentNode.endword
    }

    startwith(word){
        let currentNode = this.root
        for(const char of word){
            if(!currentNode.children[char]){
                return false            
            }
            currentNode = currentNode.children[char]
        }
        return true
    }

    autocomplete(word){
        let currentNode = this.root
        for(const char of word){
            if(!currentNode.children[char]){
                return []
            }
            currentNode = currentNode.children[char]
        }
        let list = []
        this.collectwords(currentNode, word, list)
        return list
    }

    collectwords(node, word, list){
        if(node.endword){
            list.push(word)
        }
        for(let char in node.children){
            this.collectwords(node.children[char], word+char, list)
        }
    }

}

const trie = new Trie()

trie.insert('one')
trie.insert('two')
trie.insert('once')
trie.insert('twenty')

console.log(trie.search('on'));
console.log(trie.startwith('o'));
console.log(trie.autocomplete('o'));