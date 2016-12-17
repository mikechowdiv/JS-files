//The filter() method creates a new array with all elements that pass the test implemented by the provided function.


function isBigEnough(value){
	return value >= 10;
}

var filtered = [12,5,8,130,44].filter(isBigEnough);

console.log(filtered);

//Syntax
//var new_array = arr.filter(callback[, thisArg])