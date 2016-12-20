
var clickedTime;
var createdTime;
var reactionTime;


function makeBox(){
	
	var time = Math.random();
	time = time * 5000;

	setTimeout(function(){
		document.getElementById('box').style.display = 'block';
		createdTime = Date.now();
		},time);

	document.getElementById('box').onclick = function(){
		clickedTime = Date.now();
		reactionTime = (clickedTime - createdTime)/1000;
		document.getElementById('time').innerHTML = reactionTime;
		this.style.display='none';
		makeBox();
	}
}
makeBox();






