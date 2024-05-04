// function quickSort(arr) {
//   if (arr.length <= 1) {
//       return arr;
//   }

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//           left.push(arr[i]);
//       } else {
//           right.push(arr[i]);
//       }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [4, 5, 3, 4, 8, 6, 8, 2];
// console.log(quickSort(arr));




function quick(arr){
  if(arr.length <=1){
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []

  for(i=1;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }

  return [...quick(left), pivot, ...quick(right)]

}


console.log(quick([4,2,6,89,6,5,7,6]));