Word{
	letters: [letter];
	getWord: function(){
		var strWord;
		//loop through letters
		strWord += letters[i].displayValue();
		return strWord
		guess(userGuess){
			//loop through letters
			letter[i].checkGuess(userGuess);
			getWord();
		}
		}
	}

//remember, you can access letters in an array when you use "array notation"
//example: word[0] = "c"
//remember to standardize the case for the word with ".tolowercase

