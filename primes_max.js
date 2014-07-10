// Using your isPrime() function, create a function primes that will return an array of all 
// prime numbers up to a certain amount.

var max = 100;




var primeNum = function(x){
	
	for (var i = 2; i < max; i++){
		if (x%i === 0) {
			return false;
		};
			return true
		};
	};


var primes = function(y){
	var primeArr = [];
	for(var i =1; i <=y; i++){
		if(primeNum(i) === true){
			primeArr.push(i);
		}
	}
	return primeArr;
}

console.log(maxPrime(number))