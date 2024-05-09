// function bubble(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubble([7,6,5,1,2,3,9]));



// function insertion(arr){
//     for(i=0; i<arr.length; i++){
//         for(j=i;j>=0;j--){
//             if(arr[j]<arr[j-1]){
//                [ arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(insertion([7,6,5,1,2,3,9]));



// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         for(j=i;j>=0;j--){
//             if(arr[j]<arr[j-1]){
//                 [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(insertionSort([4,5,3,4,8,6,8,2]));



// function selectionSort(arr){
//     for(i=0;i<arr.length;i++){
//         let lowest = i
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[lowest]){
//                 lowest = j
//             }
//         }
//         if(lowest!==i){
//              [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
//         }
//     }
//     return arr
// }

// console.log(selectionSort([6,5,3,1,5,8,9,1]));



class stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
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

    peek(){
        return this.items[this.items.length-1]
    }

    reverseString(str){
        const newStack = new stack()
        for(let i=0;i<str.length;i++){
            newStack.push(str[i])
        }
        let string = ''
        while (!newStack.isEmpty()) {
            string += newStack.pop()
        }
        return string
       
    }

    reverseStack(){
        const newStack = new stack()
        while(!this.isEmpty()){
            newStack.push(this.pop())
        }
        this.items = newStack.items
        return this.items
    }

    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }
}


const Stack = new stack

Stack.push(20)
Stack.push(30)
Stack.push(40)
Stack.push(50)
Stack.push(60)

console.log(Stack.peek());
Stack.pop()

console.log(Stack.reverseString('vivek'));
console.log(Stack.reverseStack());

// Stack.print()