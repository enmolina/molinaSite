var results = [
  "You will find a thing. It may be important.",
  "Stop eating now. Food poisoning is no fun.",
  "Sleep with one eye open tonight.",
  "Your reality check about to bounce.",
  "The end is near, might as well have dessert.",
  "Run.",
  "You will die alone and poorly dressed.",
  "Tomorrow is Saturday. And Sunday comes afterwards."
              ];

var numberArray = [];
var letterArray = [];
var reveal = "";
var name = "";
var userNumber = -1;
var userColor = "";
var creationofNumberArray = function(num){
	for(var i = 0; i < num; i++){
		numberArray.push(i +"...  ");
	}
}

var creationOfLetterArray = function(letter){
	for(var i = 0; i <letter.length; i++){
		letterArray.push(letter.substring(i,i+1));
	}
}
var fortune = function(){
	var random = Math.floor(Math.random()*8);
	creationofNumberArray(random);
  document.getElementById('welcome').innerHTML = "Here is your fortune, "+ name+":";
	for(var j = 0; j <numberArray.length; j++){
		reveal += numberArray[j];
	}
	document.getElementById('letter').innerHTML = " ";
	document.getElementById('final').innerHTML = " ";
	document.getElementById('end').innerHTML = results[random];

}

var fortuneNo = function(){
	var random = Math.floor(Math.random()*8);
	creationofNumberArray(random);
  document.getElementById('quit').innerHTML = "Fine. I'll give you a fortune anyway:";
	for(var j = 0; j <numberArray.length; j++){
		reveal += numberArray[j];
	}
	document.getElementById('letter').innerHTML = " ";
	document.getElementById('final').innerHTML = " ";
	document.getElementById('end').innerHTML = results[random];
}

var stepOne = function(){
	var letterString = "";
	var amount = "";
	while(!isNaN(userColor)|| !(userColor === "turquoise") && !(userColor === "fuchsia")&& !(userColor === "green")&& !(userColor === "yellow")){
    userColor = prompt("Choose a color: 'turquoise', 'fuchsia', 'green' or 'yellow': ", "Enter it here");
		userColor = userColor.toLowerCase();
	}
	userColor = userColor.toUpperCase();
	creationOfLetterArray(userColor);
	for(var j = 0; j<letterArray.length; j++){
		letterString += letterArray[j];
	}
	document.getElementById('letter').innerHTML = letterString;
	//while(userNumber < 0 || userNumber > 8){
		if(userColor === "turquoise" || userColor === "yellow"){
			while(!(userNumber=== "7") && !(userNumber=== "1")&& !(userNumber=== "9")&& !(userNumber=== "3")){
        userNumber = prompt("Choose a number: 7, 1, 9 or 3", "Enter here");
			}
		} else {
			while(!(userNumber==="8")&& !(userNumber==="6")&& !(userNumber==="2")&& !(userNumber==="4")){
        userNumber = prompt("Choose a number: 8, 6, 2 or 4", "Enter here");
			}
		}
	//}
	//var UserQuestion = prompt("What is your question?", "Enter here");
	//var Numm = userNumber%2;

  creationofNumberArray(userNumber);
	for(var j = 0; j < numberArray.length; j++){
		amount += numberArray[j];
	}
	document.getElementById('countUp').innerHTML = amount;
	document.getElementById('welcome').innerHTML =" ";
  document.getElementById('final').innerHTML =  "Here is your fortune, "+ name +":";
	document.getElementById('end').innerHTML = results[userNumber-1];
}

var main = function(){
	name = prompt("What is your name?", "Enter your name here");
	var userChoice = prompt("Hello, "+name+"! Would you like me to predict your future? Answer yes or no.", "Enter here");
	userChoice.toLowerCase();
	if(userChoice === "yes"){
		stepOne();
  } else if (userChoice === "no"){
    fortuneNo();
  } else {
    fortune();
  }
	}

main();
