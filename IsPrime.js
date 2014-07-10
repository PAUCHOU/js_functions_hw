//Create a function to return true or false if a number passed in a prime number.

var number = 16

var primeNum = function(x){
	for (var i = 2; i < x; i++){
		if (x%i === 0) {
			return false;
		};
			return true;
		};
	};


console.log(primeNum(number))