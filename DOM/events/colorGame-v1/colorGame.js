

var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
	]

	var squareX = document.querySelectorAll(".squared");
	var pickedColor = colors[3];
	var colorDisplay = document.getElementById("colorDisplay");

	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squareX.length; i++) {
		//add initial colors to squares
		squareX[i].style.background = colors[i];

		//add click liseners to squares
		squareX[i].addEventListener('click',function(){
			//grab color of clicked square
			 var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				alert('correct');
			}else{
				alert('wrong');
			}

		})
	}