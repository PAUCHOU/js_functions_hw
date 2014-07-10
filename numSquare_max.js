// ##numSquare(max)
// Create a function called `numSquare` that will return an array of all perfect square 
// numbers up to, but not exceeding a max number.

var perfSquare = 16;

var numSquare = function (max){
	var array = [];
	for (i = 1; i <= max; i++){
		if ( i*i < max ){
			array.push(i*i);
		}
	}
	return array;
}

console.log(numSquare(perfSquare))