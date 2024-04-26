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
