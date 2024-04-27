// ================sum of n numbers====================
//loop
function sum(n) {
    let result = 0;
    for (let i = 0; i <=n; i++) {
      result += i;
    }
    return result;
  }
  
  console.log(sum(5)); // Outputs: 15
  
  
  
  //Recursion
  function sum(n) {
    if (n === 0) {
      return n;
    }
    return n + sum(n - 1);
  }
  console.log(sum(5));// Outputs: 15