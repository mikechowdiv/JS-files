$( document ).ready(function() {
$.ajax({
  url:"http://freegeoip.net/json/",     type: "GET",
  dataType:"json"
    }).done(function(data1){
     
  
   $.ajax({
 		url:"https://api.apixu.com/v1/current.json?key=77a78e82f4314103b86162015170601&q=" + data1.city,
      	type: "GET",
      	dataType:"json"
    	}).done(function(data2){
     
    	$("#city").text(data1.city + ", " + data1.country_name);
      	$("#number").text(data2.current.temp_c + "°");
   		$("#condition").text(data2.current.condition.text);  
     
     	document.getElementById("wIcon").src= data2.current.condition.icon;
     
      });
            
      });       

});
    
     function changeText(){
		if ($('#cButton').text() === "celsius"){
      		$("#cButton").html("fahrenheit");
      		$("#number").text(parseInt($('#number').text().slice(0, -1))*9/5+32);   
			}
       	else if(($('#cButton').text() === "fahrenheit")){
       		$("#cButton").html("celsius");
         	$("#number").text((parseInt($('#number').text())-32)*5/9 + "°"); 
       }
       
     }