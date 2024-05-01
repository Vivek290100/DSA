class Stack{
    constructor(){
        this.item = [];
    }

    isEmpty(){
        return this.item.length === 0
    }

    push(element){
        this.item.push(element)
    }

    pop(){
        if (!this.isEmpty()) {
            return this.item.pop()
        }else{
           console.log( "stack is emptyy");
        }
    }

    reverse(str){
        const newstack = new Stack()
        for(let i=0;i<str.length;i++){
            newstack.push(str[i])
        }
        let string = ''
        while(!newstack.isEmpty()){
            string += newstack.pop()
        }
            return string
    }

    print(){
        for (let i=0;i<this.item.length;i++){
            console.log(this.item[i]); 
        }
    }
}




let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()

// stack.print()
stack.pop()

console.log(stack.reverse(str = 'vivek'));

stack.print()