class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items == 0;
    }

    push(element){
        return this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }

    reverseString(str){
        const newStack = new Stack()
        for(let i=0;i<str.length;i++){
            newStack.push(str[i])
        }
        let string = ''
        while(!newStack.isEmpty()){
            string += newStack.pop()
        }
        return string
    }
}



let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.reverseString('vivek'));

stack.print()