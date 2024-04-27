function LinearSearch(array = [10, 30, 20, 40], target = 20){
    for(i=0;i<array.length;i++){
        if(array[i]==target){
            return i
        }
    }
    return -1
}
console.log(LinearSearch());



//using recursion
function LinearRecursion(array=[10,30,20,40], target = 20, index = 0){
    if(index >= array.length ){
        return -1
    }

    if(array[index] == target){
        return index
    }

    return LinearRecursion(array, target, index+1)
}
console.log(LinearRecursion());



// function fun(array,target){
//     for(i=0;i<array.length;i++){
//         if(array[i]==target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(fun([1,3,2,3,4,6,4,56],56))




// function fun(array,target, index=0){
//     if(index >= array.length){
//         return -1
//     }

//     if(array[index] === target){
//         return index
//     }

//     return fun(array, target, index+1)
// }

// console.log(fun([1,2,3,4,5], 3));