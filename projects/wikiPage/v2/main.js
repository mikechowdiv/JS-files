

$(function(){
	$("#search").on("click",function(){
		var searchTerm = $("searchTerm").val();
		var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&format=json&utf8&callback=?';
		$.ajax({
			url:url,
			type:'GET',
			dataType:'json',
			data: function(data, status, jqXHR){
				console.log(data)
			},
		})
		.done(function(){
			console.log("success");
		})
		.fail(function(){
			console.log('error');
		})
		.always(function(){
			console.log('complete');
		})
	});
});