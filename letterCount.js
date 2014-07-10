// Write a function that takes a string that finds out how many times a character occurs. 
// For example, the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1
// BONUS: Make sure that lower case letters and upper case letters count for the same character. 
// Also, ignore spaces and punctuation.

var string = "banana";

var letterCount = function(y){
	var count = {};
	for(i = 0; i < y.length; i++){
		var letter = y[i];
		if (count[letter] === undefined){
			count[letter] = 1;
		
		}
		else {
			count[letter]++
		
		}
	}
		return count;
};

console.log(letterCount(string));
