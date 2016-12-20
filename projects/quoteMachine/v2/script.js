var quotes = [

	{quote: "Objective: Build a CodePen.io app that is functionally similar to this: ", author: "author1"},
	{quote: "Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.", author: "author2"},
	{quote: "User Story: I can click a button to show me a new random quote.", author: "author3"},
	{quote: "User Story: I can press a button to tweet out a quote.", author: "author4"},
	{quote: "Remember to use Read-Search-Ask if you get stuck.", author: "author5"},

];

var displayQuotes;
var currentIdx;

function updateQuote(){
	do{
		var idx = Math.floor(Math.random() * quotes.length);
	}while(currentIdx === idx);
	
	displayQuotes = quotes[idx];

	currentIdx = idx;
	$('#quote').html(quotes[idx].quote);
	$('#author').html(quotes[idx].author);
}

$(function(){
	updateQuote();
	$('#generator').click(updateQuote);
});

