//Write a function that takes an array of numbers, 
//and returns the sum of each number multiplied by its index.

//count += (number * index)

var arr1 = [2,4,5,6,7,8];

var sillySum = function(x){
	var count = 0;

	for (var i = 0; i < x.length; i++) {
		count += i * x[i];
	};

	return count;
};

console.log(sillySum(arr1));