

	var colors = generateRandomColors(6);
	var squareX = document.querySelectorAll(".squared");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector('#message');
	var h1 = document.querySelector('h1');

	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squareX.length; i++) {
		//add initial colors to squares
		squareX[i].style.background = colors[i];

		//add click liseners to squares
		squareX[i].addEventListener('click',function(){
			//grab color of clicked square
			 var clickedColor = this.style.background;
			//compare color to pickedColor
			console.log(clickedColor, pickedColor)
			if(clickedColor === pickedColor){
				messageDisplay.textContent = 'Correct';
				changeColors(clickedColor);
				h1.style.background = clickedColor;
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

	function generateRandomColors(num){
		//make an array
		var arr = []
		//repeat num times
		for (var i = 0; i < num; i++ ){
			//get random colors and push into array
			arr.push(randomColor())
			
		}
		//return that array
		return arr;
	}

	function randomColor(){
		//pick a 'red' from 0 to -255
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}