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
// if letterGuessed === value 
// 	hasBeenGuesed === true
//make a new constructor for each letter


var Letter = function(partOfWord) {
	this.value = partOfWord;
	this.hasBeenGuessed = partOfWord;
	this.displayValue = function(){
		// //if (this.hasBeenGuessed == letterGuess) {
		// 	return value;
		// }
		// else {
		//  return("-")
		console.log(partOfWord);
		return partOfWord;
	};
		
	this.checkGuess = function(letterGuess){
		if (letterGuess == value){
		this.hasBeenGuessed = true 
		return value
		}

	}


	};


module.exports = Letter;
