//================sum of n numbers====================

// function sum(n) {
//   let result = 0;
//   for (let i = n; i > 0; i--) {
//     result += i;
//   }
//   return result;
// }

// console.log(sum(5)); // Outputs: 15




// function sum(n) {
//   if (n === 0) {
//     return n;
//   }
//   return n + sum(n - 1);
// }
// console.log(sum(5));



//==========================Fibonacci Sequence============

// function fun(n){
//   if(n<=1){
//     return n
//   }
//   return fun(n-1)+fun(n-2)
// }
// console.log(fun(7));               //0 1 1 2 3 5 8 13 21




// function fun(n){
//   let fib1 = 0
//   let fib2 = 1
//   let fib = 0
//   for (i=2;i<=n;i++){
//     fib = fib1 + fib2
//     fib1 = fib2
//     fib2 = fib
//   }
//   return fib
// }
// console.log(fun(7));                //13



// function fib(n) {                   // O(1)
// 	let fi = [0,1];                    // O(1)
// 	for(let i = 2; i < n; i++) {       // O(n)
// 		fi[i] = fi[i-1] + fi[i-2];       // O(1)
// 	}
	
// 	return fi;                         // O(1)
// }

// console.log(fib(2));                //[ 0, 1 ]
// console.log(fib(3));                //[ 0, 1, 1 ]
// console.log(fib(4));                //[ 0, 1, 1, 2 ]






//============================factorial=================

// function fact(n) {                    // O(1)
// 	var fa = 1;                          // O(1)
// 	for(let i = n; i > 1; i--) {         // O(n)
// 		fa *= i;                           // O(1)
// 	}
// 	return fa;                           // O(1)
// }

// console.log(fact(0));
// console.log(fact(1));
// console.log(fact(5));




// function fact(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }

// console.log(fact(0)); // Outputs: 1
// console.log(fact(1)); // Outputs: 1
// console.log(fact(5)); // Outputs: 120




