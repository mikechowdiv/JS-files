function bouncer(arr){
	var holder = [];
	holder = arr.filter(remove);
	return holder;
}

function remove(value){
	return Boolean(value);
}

bouncer([7, "ate", "", false, 9]);