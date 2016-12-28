var fin1 = false;
var fin2 = false;
var dice1 = 1;
var dice2 = 1;
var playAgain = true;
var isRunning = false;

var betCount = 0;
var playerMoney = 0;

var maxWin = 0;
var maxWinIdx = 0;

function playGame(){
	if(document.getElementById('btn').innerHTML == 'PlayAgain'){
		document.getElementById('resultID').innerHTML = '';
		document.getElementById('btn').innerHTML = 'Start to Play: ';
		document.getElementById('money').value = '';
	}else{
		if(document.getElementById('money').value == ''){
			alert('Please enter your bet');
			return;
		}
		if(!isRunning){
			isRunning = true;
			if(betCount == 0){
				playerMoney = document.getElementById('money').value;
				if(playerMoney == null){
					playerMoney = 0;
				}
				document.getElementById('resultID').innerHTML = '';
			}
			if(playerMoney == 0){
				showResult();
				return;
			}
			dice1 = Math.floor(Math.random() * 6) + 1;
			dice2 = Math.floor(Math.random() * 6) + 1;

			fin1 = true;
			fin2 = true;
			calculateResult();
		}
	}
}

function calculateResult(){
	if(fin1 && fin2){
		betCount++;
		fin1 = false;
		fin2 = false;
		var sum = dice1 + dice2;
		var winningScore = '';
		var losingScore = '';
		if(sum == 7){
			playerMoney += 4;
			maxWin += 4;
			maxWinIdx = betCount;
			winningScore = '$4';
		}else{
			playerMoney -= 1;
			losingScore = '$1';
		}
		document.getElementById('btn').innerHTML = 'Another bet: ';

		if(playAgain){
			isRunning = false;
			playGame();
		}else{
			isRunning = false;
		}
	}
}

function showResult(){
	var result = document.getElementById('resultID');
	var count = document.getElementById('count');
	var maxWinAmt = document.getElementById('maxWinAmt');
	var maxWinCount = document.getElementById('maxWinCount');
	result.innerHTML = 'Starting Bet: $' + document.getElementById('money').value;
	count.innerHTML = 'Total rolls before going broke: ' + betCount;
	maxWinAmt.innerHTML = 'Highest amount won: $' + maxWin;
	maxWinCount.innerHTML = 'Roll count on Highest amount won: ' + maxWinIdx;

	document.getElementById('btn').innerHTML = 'PlayAgain';
	betCount = 0;
	maxWin = 0;
	maxWinIdx = 0;
	isRunning = false;
}
