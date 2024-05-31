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
        for(const chat of word){
            if(!currentNode.children[char]){
                currentNode.childNodes[char] = new Node()
            }
            currentNode = currentNode.children[char]
        }
        currentNode.endword = true
    }

}

const trie = new Trie()

trie.insert('bike')
trie.insert('bikes')
trie.insert('bus')
trie.insert('jeep')