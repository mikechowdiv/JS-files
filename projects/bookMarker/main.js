//listen for form submitted
document.getElementById('myForm').addEventListener('submit',saveBookmark);

//save bookmark
function saveBookmark(e){
	//get from values
	var siteName = document.getElementById('siteName').value;
	var siteURL = document.getElementById('siteURL').value;
	
	if(!validateForm(siteName, siteURL)){
		return false;
	}

	//submit to local storage
	var bookmark = {
		name: siteName,
		url: siteURL
	}

/*
	//local storage test
	localStorage.setItem("test", "hello world");
	console.log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.log(localStorage.getItem('test'));
	*/

	//test if bookmarks are null
	if(localStorage.getItem('bookmarks') === null){
		//initialize array
		var bookmarks = [];
		//add to array
		bookmarks.push(bookmark);
		//set to localstorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}else{
		//get bookmarks from localstorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		//add bookmark to array
		bookmarks.push(bookmark);
		//re-set back to local storage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	//clear form
	document.getElementById('myForm').reset();

	//re-fetch bookmark
	fetchBookmarks();

	//prevent form from submitting
	e.preventDefault();
}



//delete bookmark
function deleteBookmark(url){
	//get bookmarks from locatstorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	//loop thru bookmarks
	for(var i = 0; i < bookmarks.length; i++){
		if(bookmarks[i].url == url){
			//remove from array
			bookmarks.splice(i,1);
		}
	}
	//reset back to the localstorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	//re-fetch bookmark
	fetchBookmarks();
}

//fetch bookmarks
function fetchBookmarks(){
	//get bookmarks from localstorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		//get output id
		var bookmarksResults = document.getElementById('bookmarksResults');

		//build output
		bookmarksResults.innerHTML = "";

		for(var i = 0; i < bookmarks.length; i++){
			var name = bookmarks[i].name;
			var url = bookmarks[i].url;

			bookmarksResults.innerHTML += '<div class="well">' + 
										"<h3>" + name +
										' <a class="btn btn-default" target="_blank" href="'+url+'">visit</a>' +
										' <a onclick="deleteBookmark(\'' +url+'\')" class="btn btn-danger"  href="#">delete</a>' +
										"</h3>" +
										"</div>";
		}
}

//validate form
function validateForm(siteName, siteURL){
	if(!siteName || !siteURL){
		alert('please fill in the form');
		return false;
	}

	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if(!siteURL.match(regex)){
		alert('please use a valid url');
		return false;
	}

	return true;
}