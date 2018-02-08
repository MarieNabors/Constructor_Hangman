

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
