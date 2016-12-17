function chunkArrayInGroups(arr,size){

	var chuck = [];
	while(arr.length){
		chuck.push(arr.splice(0,size));
	}
	return chuck;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2);)