// 	this.guessing = function(b){
// 		if (this.letter === b){
// 			this.guessed = true;


// this.letter = a;
// 	this.letterDisplayed = "_";
// 	this.guessed = false;

// 	// function that checks to see the status of this.guessed and displays character accordingly
// 	this.toString = function(){
// 		if (this.guessed === false){
// 			this.letterDisplayed = "_";
// 		} else if (this.guessed === true) {
// 			this.letterDisplayed = this.letter;
// 		}
// 	};
// 	// guessing function that checks guessed letter against object property letter
// 			this.toString();
// 		} 
// 	};
// };

// module.exports = Letter;



var Letter = function(x) {
	this.value = x;
	this.userSeees = "_"
	this.hasBeenGuessed = false;

	//checks status of user's guess, and displays either the guess or an underscore
	this.displayValue = function(){
		if (this.hasBeenGuessed == false) {
		this.userSees = "_";
	} else if (this.hasBeenGuessed === true) {
		this.userSees = this.value;
	};

	}
	//check guess to see if it matches an object property letter
	this.checkGuess = function(m){
		if (this.value === m) {
			this.hasBeenGuessed = true;
			this.displayValue();
		}
	}
	
};


module.exports = Letter;
