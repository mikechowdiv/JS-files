

var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
	]

	var squareX = document.querySelectorAll(".squared");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector('#message');

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
				messageDisplay.textContent = 'Correct';
				changeColors(clickedColor);
			}else{
				this.style.background = '#232323';
				messageDisplay.textContent = 'Try Again';
			}

		})
	}

	function changeColors(colorX){
		//loop through all squares
		for (var i = 0; i < colors.length; i++) {
			//change each color to match given color
			squareX[i].style.background = colorX;
		}
	}

	function pickColor(){
		var randomX = Math.floor(Math.random() * colors.length);
		return colors[randomX];
	}