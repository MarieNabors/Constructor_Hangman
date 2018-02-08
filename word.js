//require letter.js
var Letter = require("./letter.js")

//constructor, capital letter, creates array of letters from chosenWord
var Word =function(chosenWord) {
	//takes randomly selected word and puts it ito Word constructor
	
		// empty lettersArray to be populated by Word constructor
		this.lettersArray = [];

		this.array = [];
		//chosenWord.split("");
		this.splitArray = [];

		this.splitFunction = function(newWord){
			//var random = chosenWord.split("");
		this.lettersArray.push(newWord.split(""));
		};
		// for (var i = 0; i<array.length; i++){
		// 	lettersArray.push( new Letter(array[i]));
		// }
		// return lettersArray;
	
		this.getWord = function(){
		//loop through array
		//call displayValue function on each letter
		//concatonate those letters together into one string
		for(var i = 0; i<this.lettersArray[0].length; i++) {
			var str = new Letter(this.lettersArray[0][i]);
			this.array.push(str);
			};
		for(var i = 0; i<this.lettersArray[0].length;i++){
			this.splitArray.push(this.array[i].userSees);
		};
		}; 

		this.objectCheck = function(letter){
			for (var i = 0; i<this.lettersArray[0].length; i++){
				this.array[i].checkGuess(value);
			};

		this.splitArray = [];

		for (var i=0; i<this.lettersArray[0].length; i++){
			this.splitArray.push(this.array[i].userSees);
		};
		};
		// this.getWordDashes = function(){
		// var wordDashes = this.getWord();
		// var wordLength = wordDashes.length;
		// var newString = "";
		// for (var i = 0; i<wordLength; i++) {
		// 	newString += "_"
		// }
		// console.log(newString);
		//newString = newString + "_"
		//get the random word
		//find the length of the word
		//create a new string
		//for each letter in the world, add a dash to the new string
	};
  //loops through word list


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

