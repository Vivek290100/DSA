class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        this.items == 0;
    }

    push(element){
        return this.items.push(element)
    }

    print(){
        for(i=0;i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }

    reverseString(str){
        const newStack = new newStack
        for(let i=0;i<str.length;i++){
            newStack.push(str[i])
        }
        let string = ''
        while(!newStack.isEmpty()){
            string += this.items.pop()
        }
        return string
    }
}



let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.reverseString()
);

stack.print()