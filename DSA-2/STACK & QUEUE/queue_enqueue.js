class queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
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

Queue.print()