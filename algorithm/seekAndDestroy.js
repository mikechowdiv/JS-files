function destroyer(arr){
	var args = Array.prototype.slice.call(arguments,1);
	return arr.filter(function(item){
		return !args.includes(item);
	})
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);