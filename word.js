var Letter = require("./letter.js")
function Word(chosenWord) {
	this.letters = function(){
		// new Letter[chosenWord];
		var lettersArray = []
		var array = chosenWord.split("");
		for (var i = 0; i<array.length; i++){
			lettersArray.push( new Letter(array[i]));
		}
		return lettersArray;
	} 
	this.getWord = function(){
		//loop through this.letters
		//call displayValue function on each letter
		//concatonate those letters together into one string
		var strWord;
		var step;
		var str = ""
for (var i = 0; i<this.letters.length; i++){
 str += this.letters[i].displayValue;

} 
return str;
 //var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
}
this.getWordDashes = function(){
		var wordDashes = this.getWord();
		var wordLength = wordDashes.length;
		var newString = "";
		for (var i = 0; i<wordLength; i++) {
			newString += "_"
		}
		console.log(newString);
		//newString = newString + "_"
		//get the random word
		//find the length of the word
		//create a new string
		//for each letter in the world, add a dash to the new string
	}
  //loops through word list
}

module.exports = Word;
		//loop through letters
		// strWord += letters[i].displayValue();
		// return strWord
		// guess(userGuess)
		// 	//loop through letters
		// 	letter[i].checkGuess(userGuess);
		// 	getWord();
		// }
		

	

//remember, you can access letters in an array when you use "array notation"
//example: word[0] = "c"
//remember to standardize the case for the word with ".tolowercase

