
//==========================Fibonacci Sequence============
//Using Recursion
function fun(n){
    if(n<=1){
      return n
    }
    return fun(n-1)+fun(n-2)
  }
  console.log(fun(7));               //0 1 1 2 3 5 8 13 21
  
  
  
  //Loop
  function fun(n){
    let fib1 = 0
    let fib2 = 1
    let fib = 0
    for (i=2;i<=n;i++){
      fib = fib1 + fib2
      fib1 = fib2
      fib2 = fib
    }
    return fib
  }
  console.log(fun(7));                //13
  
  
  //Loop
  function fib(n) {                   // O(1)
      let fi = [0,1];                    // O(1)
      for(let i = 2; i < n; i++) {       // O(n)
          fi[i] = fi[i-1] + fi[i-2];       // O(1)
      }
      
      return fi[n-1];                         // O(1)
  }
  
  console.log(fib(2));                //[ 0, 1 ]
  console.log(fib(3));                //[ 0, 1, 1 ]
  console.log(fib(4));                //[ 0, 1, 1, 2 ]