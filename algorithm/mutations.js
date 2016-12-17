function mutation(arr){
	var arr1 = arr[1].toLowerCase();
	var arr0 = arr[0].toLowerCase();
	for(var i = 0; i < arr1.length; i++){
		if(arr0.indexOf(arr1[i]) < 0){
			return false;
		}else{
			return true;
		}
	}
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])