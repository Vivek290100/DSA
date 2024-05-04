// bubbleSort 
// Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.



// Big-O: 𝑂(𝑛2)


// function bubbleSort(arr){
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

// console.log(bubbleSort([4,4,67,89,5,5]));



function bubble(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubble([1,4,2,67,4,7]));