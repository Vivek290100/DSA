// Insertion Sort
// The Insertion Sort algorithm uses one part of the array to hold the sorted values, and the other part of the array to hold values that are not sorted yet.


// Big-O: 𝑂(𝑛2)


function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        for(j=i;j>=0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
    return arr
}
console.log(insertionSort([4,5,3,4,8,6,8,2]));


function insertion(arr){
    for (i=0;i<arr.length;i++){
        for(j=i;j>=0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j], arr[j-1]]
            }
        }
    }
}