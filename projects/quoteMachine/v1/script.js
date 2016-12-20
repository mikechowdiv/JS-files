var quotes = [

	{quote: "testing1", author: "author1"},
	{quote: "testing2", author: "author2"},
	{quote: "testing3", author: "author3"},
	{quote: "testing4", author: "author4"},
	{quote: "testing5", author: "author5"},

];

var displayQuote;

function updateQuote(){
	var idx = Math.floor(Math.random() * quotes.length);
	displayQuote = quotes[idx];

	$('#quote').html(quotes[idx].quote);
	$('#author').html(quotes[idx].author);
}

$(function(){
	$('#generator').click(function(){
		updateQuote();
	})
})

