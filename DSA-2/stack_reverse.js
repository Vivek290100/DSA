class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length == 0
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if (this.isEmpty()) {
            console.log('Empty');
        }
        return this.items.pop()
    }

    reverse(){
        const newStack = new Stack()
        while (!this.isEmpty()) {
            newStack.push(this.pop())
        }
        this.items = newStack.items
    }

    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i]) 
        }
    }
}


const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.reverse()
stack.print()

