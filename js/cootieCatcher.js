var results = ["Fortune1", "Fortune2", "Fortune3","Fortune4", "Fortune5","Fortune6", "Fortune7", "Fortune8"];
var numberArray = [];
var letterArray = [];
var tata = "";
var name = "";
var userNumber = -1;
var userColor = "";

var creationofArray = function(num){
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
	var random = Math.floor(Math.random() * 8);
	creationofArray(random);
	document.getElementById('Welcome').innerHTML = "Here is your fortune, "+ name+"!";
	for(var j = 0; j<numberArray.length; j++){
		tata += numberArray[j];
	}
	document.getElementById('Letter').innerHTML = " ";
	document.getElementById('blah').innerHTML = " ";
	document.getElementById('tada').innerHTML = tata;
	document.getElementById('demo').innerHTML = results[random];

}
var stepOne = function(){
	var LetterString = "";
	var amount = "";
	while(!isNaN(userColor)|| !(userColor === "turquoise") && !(userColor === "fuschia")&& !(userColor === "green")&& !(userColor === "yellow")){
    userColor = prompt("Choose a color: 'turquoise', 'fuschia', 'green' or 'yellow': ", "Enter it here");
		userColor = userColor.toLowerCase();
	}
	userColor = userColor.toUpperCase();
	creationOfLetterArray(userColor);
	for(var j = 0; j<letterArray.length; j++){
		LetterString += letterArray[j];
	}
	document.getElementById('Letter').innerHTML = LetterString;
	//while(userNumber <0 || userNumber > 8){
		if(userColor === "turquoise" || userColor === "yellow"){
			while(!(userNumber=== "7") && !(userNumber=== "1")&& !(userNumber=== "9")&& !(userNumber=== "3")){
        userNumber = prompt("Choose a number: 7, 1, 9 or 3", "Enter here");
			}
		}else{
			while(!(userNumber=== "8") && !(userNumber=== "6")&& !(userNumber=== "2")&& !(userNumber=== "4")){
        userNumber = prompt("Choose a number: 8, 6, 2 or 4", "Enter here");
			}
		}
	//}
	//var UserQuestion = prompt("What is your question?", "Enter here");
	//var Numm = userNumber%2;
	creationofArray(userNumber);
	for(var j = 0; j<numberArray.length; j++){
		amount += numberArray[j];
	}
	document.getElementById('CountUp').innerHTML = amount;
	document.getElementById('Welcome').innerHTML =" ";
	document.getElementById('blah').innerHTML = " ";
	document.getElementById('tada').innerHTML =  "Here is your fortune, "+ name+"!";
	document.getElementById('demo').innerHTML = results[userNumber-1];
}
var main = function(){
	name = prompt("What is your name?", "Enter your name here");
	var userChoice = prompt("Hello, "+name+"! Would you like me to predict your future? Answer yes or no.", "Enter here");
	userChoice.toLowerCase();
	if(userChoice === "no"){
		fortune();
	}else if(userChoice === "yes"){
		stepOne();
	}else{
		document.getElementById('blah').innerHTML = "I don't understand let me tell you your future then: ";
		fortune();
	}
}
main();