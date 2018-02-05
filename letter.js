// Letter(){
// 	value: "c";
// 	hasBeenGuesed:false;
// 	displayValue: function(){
// 		if hasBeenGuesed 
// 			return value
// 		else {
// 			return
// 		}
// 	checkGuess: function(letterGuessed){
// if letterGuessed ===value 
// 	hasBeenGuesed===true
//make a new constructor for each letter

 Letter. This constructor should be able to either display an underlying character or a 
 blank placeholder (such as an underscore), depending on whether or not the user has 
 guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed,
   or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against 
  the underlying character, updating the stored boolean value to true if it was guessed correctly
		}
	}
	
// }


var Letter = function(letterGuess) {
	this.value = letterGuess;
	this.hasBeenGuessed = false;
	this.correctLetter = function(){
		if hasBeenGuessed = letterGuess;
			return value;
	};
		else {
		 return("-")
	this.checkGuess = function(){
		if hasBeenGuessed === letterGuess;
		hasBeenGuessed = true 
		}}

	};
module.exports(Letter);


