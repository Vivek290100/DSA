//Secletion Sort
//The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }
      if (lowest !== i) {
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      }
    }
    return arr;
  }
  
  console.log(selectionSort([3, 5, 1, 2]));              // [1, 2, 3, 5]
  

  
