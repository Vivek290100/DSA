class queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length===0
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log(`'it's empty`);
        }else{
            this.items.shift()
        }
    }

    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }
}

let Queue = new queue()

Queue.enqueue(10)
Queue.enqueue(20)
Queue.enqueue(30)

Queue.dequeue()
Queue.print()