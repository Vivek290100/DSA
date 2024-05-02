function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)]; // Choose the middle element as pivot
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) {
        continue; // Skip the pivot element
      }
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort left and right sub-arrays
  }
  
  // Example usage:
  const array = [5, 3, 7, 2, 8, 4, 1, 6];
  console.log("Original array:", array);
  const sortedArray = quickSort(array);
  console.log("Sorted array:", sortedArray);
  