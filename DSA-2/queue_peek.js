class queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        this.items.length == 0
    }

    enqueue(element){
        this.items.push(element)
    }

    peek(){
        if(this.isEmpty()){
            console.log('Empty');
        }else{
            console.log(this.items[0]); 
        }
    }

    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }


}

let Queue = new queue
Queue.enqueue(10)
Queue.enqueue(20)
Queue.enqueue(30)

Queue.peek()

Queue.print()