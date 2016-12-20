var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var fin1=false;
var fin2=false;
var num1 = 1;			//存放两个骰子的数值
var num2 = 1;			//存放两个骰子的数值
var isAutoNext=true;	//是否自动进入下一局
var isRuning=false;

var gameNum=0;			//记录游戏次数
var userMoney=0;		//用户金额

var maxMoney=0;
var maxMoneyIndex=0;

//开始游戏
function playGame(){
	
	if(!isRuning){
		isRuning=true;
		if(gameNum==0){
			//第一次执行,获取用户投注金额
			userMoney=document.getElementById("money").value;
			if(userMoney==null){
				userMoney=0;
			}
			userMoney=userMoney*1;
			document.getElementById("btn").value="开始";
			document.getElementById("resultID").innerHTML="";
			var hStr="<table border='1' class='imagetable'>"+
						"<thead><tr>"+
							"<th>投掷次数</th><th>投掷结果</th><th>余额</th><th>赢$</th><th>输$</th>"+
						"</tr></thead>"+
						"<tbody id='TBody'></tbody>"+
					"</table>";
			document.getElementById("process").innerHTML=hStr;
		}
		
		if(userMoney==0){
			//用户金额已经输光了
			shopResult();
			return;
		}

		num1 = Math.floor(Math.random()*6+1);//产生随机数1-6
		num2 = Math.floor(Math.random()*6+1);//产生随机数1-6
		
		//变化两个骰子
		// diceRuning(dice1,num1,function(){
		// 	fin1=true;
		// 	calculationResult();
		// });
		// diceRuning(dice2,num2,function(){
		// 	fin2=true;
		// 	calculationResult();
		// });
		calculationResult();
	}
	

}

//计算结果
function calculationResult(){
	if(fin1 && fin2){
		gameNum++;
		fin1=false;
		fin2=false;
		//开始计算 游戏结果
		var sum=num1+num2;
		var winScore="";
		var lostScore="";
		if(sum==7){//玩家赢 +$4 
			userMoney+=4;
			maxMoney+=4;
			maxMoneyIndex=gameNum;
			winScore="$4";
		}else{//玩家输 -$1
			userMoney-=1;
			lostScore="$1";
		}
		//document.getElementById("money").value=userMoney;
		document.getElementById("btn").value="再投一次";
		//
		setProcess(winScore,lostScore);
		
		
		if(isAutoNext){
			setTimeout(function(){
				//自动进入下一局
				isRuning=false;
				playGame();
			},1000);
		}else{
			isRuning=false;
		}
	}
}

//显示结果
function shopResult(){
	
	//插入结果表格
	var htmlStr="<table border='1' class='imagetable'>"+
					"<tr align='center'>"+
						"<th colspan='2'>结果</th>"+
					"</tr>"+
					"<tr>"+
						"<td align='left' style='width:70%;'>开始金额: </td><td>"+document.getElementById("money").value+"</td>"+
					"</tr>"+
					"<tr>"+
						"<td align='left'>破产前投掷次数: </td><td>"+gameNum+"</td>"+
					"</tr>"+
					"<tr>"+
						"<td align='left'>曾经赢得最高金额记录: </td><td>"+maxMoney+"</td>"+
					"</tr>"+
					"<tr>"+
						"<td align='left'>玩家使用多少次赢得最高金额: </td><td>"+maxMoneyIndex+"</td>"+
					"</tr>"+
				"</table>";
	document.getElementById("resultID").innerHTML=htmlStr;
	
	//初始化
	document.getElementById("btn").value="开始";
	gameNum=0;
	maxMoney=0;
	maxMoneyIndex=0;
	isRuning=false;
}

//插入过程
function setProcess(winScore,lostScore){
	var htmlStr=document.getElementById("TBody").innerHTML;
	htmlStr+="<td>"+gameNum+"</td><td>"+(num1+num2)+"</td><td>"+userMoney+"</td><td>"+winScore+"</td><td>"+lostScore+"</td>";	
	document.getElementById("TBody").innerHTML=htmlStr;		
}
 
//骰子动画效果
function diceRuning(dice,num,fun){
	setTimeout(function(){
		dice.setAttribute("class", "dice dice_t");
		setTimeout(function(){
			dice.setAttribute("class", "dice dice_s");
			setTimeout(function(){
				setTimeout(function(){
					dice.setAttribute("class", "dice dice_t");
					setTimeout(function(){
						dice.setAttribute("class", "dice dice_s");
						setTimeout(function(){
							dice.setAttribute("class", "dice dice_e");
							setTimeout(function(){
								dice.setAttribute("class", "dice dice_"+num);
								if(fun){
									fun();
								}
							},100);
						},100);
					},100);
				},100);
			},100);
		},100);
	},100); 
}