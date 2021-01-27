// JavaScript Document

// Global game variables
var ranNum = Math.floor(Math.random() * 100) + 1;
console.log(ranNum) // so we can cheat and see the number
var numberInput = document.getElementById('number_input');
var btnEnterGuess = document.getElementById('btn_enter_guess');
var messageOutput = document.getElementById('message_output');
var counterGuess = 0;
var gameFinished = false;

// Click handler
btnEnterGuess.onclick = function(){
	
	if(gameFinished === false){
		checkGuess(); // function to check the guess...	
	}else {
		messageOutput.innerHTML = 'Game Finished...Please refresh the page to play again...';	
	}
	
} // end click event handler for the button...

// Check guess function...
function checkGuess(){
	
	counterGuess++; // add one to guess counter...
	
	var numIsValid = false;
	
	var guessedNum = numberInput.value; // the users guess
	//console.log(guessedNum);
	
	// Optional...if you want to make sure they entered 
	// a valid number
	var regex = new RegExp(/^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/);
	// test the user input against the regular expression
	// using the JavaScript test() method...
	var testResult = regex.test(guessedNum);
	console.log(testResult);
	
	// General test to make sure the user entered a number...
	if(testResult === false){
		
		// user did not enter a valid number
		messageOutput.innerHTML = 'Please enter a valid number between 1 and 100';	
	}else{
		
		// convert the form input value to a number data
		// type...
		guessedNum = parseFloat(guessedNum);
		
		// the user entered a number...
		if(guessedNum < 1 || guessedNum > 100){
			messageOutput.innerHTML = 'Please enter a valid number between 1 and 100';	
		}else{
			// user has made a valid guess...
			numIsValid = true;	
		} // end if --> number is between 1 and 100
		
	} // end if --> user entered a valid number...
	
	// check guess against the random number...
	if(numIsValid === true){
		
		if(guessedNum > ranNum){
			messageOutput.innerHTML = 'Too high..try a lower number...';
		}else if(guessedNum < ranNum){
			messageOutput.innerHTML = 'Too low..try a higher number...';
		}else{
			
			gameFinished  = true;
			
			if(counterGuess === 1){
				messageOutput.innerHTML = 'Wow mind reader you guessed it on the first try...';	
			}else{
				messageOutput.innerHTML = 'You gueesed correctly...It took you ' + counterGuess + ' guesses to guess the correct number...';
			} // end if --> end of game messages...
				
		} // end if --> too or too low or correct...
			
	} // end if --> num is valid...
	
} // end of checkGuess() function...








