class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length == 0
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
           console.log('empty'); 
        }else{
            return this.items.pop()
        }
    }

    reverse(){
        const newStack = new Stack()
        while (!this.isEmpty()) {
            newStack.push(this.pop())
        }
        this.items = newStack.items
    }

    deleteMid(){
        const tempStack = new Stack()
        const length = this.items.length
        const midIndex = Math.floor(length/2)

        for(let i=0;i<midIndex;i++){
            tempStack.push(this.pop())
        }

        this.pop()

        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop())
        }
    }


    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }


}


let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

// stack.print()

// stack.reverse()
stack.deleteMid()
stack.print()
