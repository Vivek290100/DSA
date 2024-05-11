function bubble(arr){
    if(arr.length <=1){
        return arr
    }

    for(i=0; i<arr.length; i++){
        for(j=0 ; j<arr.length; j++){
            if(arr[j]>arr[j+1])
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
    return arr
}

console.log(bubble([6,5,22,8,1,0]));




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


class Satck{
   
}

let Queue = new queue()

Queue.enqueue(10)
Queue.enqueue(20)
Queue.enqueue(30)

Queue.dequeue()
Queue.print()