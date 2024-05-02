class stack{
    constructor(){
        this.item = []
    }

    

    push(element){
        this.item.push(element)
    }

    print(){
        for(let i=0;i<this.item.length;i++){
            console.log(this.item[i]);
        }
    }

    peek(){
        console.log(this.item[this.item.length-1]); 
    }
}

let Stack = new stack;

Stack.push(10)
Stack.push(20)
Stack.push(30)

Stack.peek()

Stack.print()