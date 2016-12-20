var quotes = [
	'Quote 1. -- Walt Disney',
	'Quote 2. -- Will Roger',
	'Quote 3. -- Unknown',
	'Quote 4. -- Rob Madison'
]

function newQuote(){
	var randNum = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randNum];
}