class Node{
    constructor(){
        this.children = {}
        this.endWord = false
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
        currentNode.endWord = true
    }

    search(word){
        let currentNode = this.root
        for(const char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode = currentNode.children[char]
        }
        return currentNode.endWord
    }

    startWith(word){
        let currentNode = this.root
        for(const char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode = currentNode.children[char]
        }
        return true
    }

    autoComplete(word){
        let currentNode = this.root
        for(const char of word){
            if(!currentNode.children[char]){
                return []
            }
            currentNode = currentNode.children[char]
        }
        let list = []
        this.collectWord(currentNode, word, list)
        return list
    }

    collectWord(node,word,list){
        if(node.endWord){
            list.push(word)
        }
        for(let char in node.children){
            this.collectWord(node.children[char], word + char, list)
        }
    }

}

const trie = new Trie()

trie.insert('car')
trie.insert('bike')
trie.insert('jeep')
trie.insert('bus')
trie.insert('bikers')

console.log(trie.search('bike'))
console.log(trie.startWith('bik'))
console.log(trie.autoComplete('a'))
