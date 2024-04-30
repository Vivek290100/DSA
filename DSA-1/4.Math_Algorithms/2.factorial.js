
//============================factorial=================
//Loop
function fact(n) {                    // O(1)
	var fa = 1;                          // O(1)
	for(let i = n; i > 1; i--) {         // O(n)
		fa *= i;                           // O(1)
	}
	return fa;                           // O(1)
}

console.log(fact(0));
console.log(fact(1));
console.log(fact(5));



//Using arecursion
function fact(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

console.log(fact(0)); // Outputs: 1
console.log(fact(1)); // Outputs: 1
console.log(fact(5)); // Outputs: 120


