

function makeBox(){
	var time = Math.random();
	time = time * 5000;

	setTimeout(function(){
		document.getElementById('box').style.display = 'block';
		},time);

	document.getElementById('box').onclick = function(){
		this.style.display='none';
		makeBox();
	}
}
makeBox();






