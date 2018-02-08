var Word = require("./word.js");

var wordOptions = ["love", "joy", "peace", "patience",
 "kindness", "goodness", "faithfulness",
 "gentleness", "selfcontrol"];
 
 var chosenWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];

 var newWord = new Word(chosenWord)
 //console.log(chosenWord);
newWord.getWordDashes();


 var letterGuess =  {
 	name: "letterGuessed",
	message: "Guess a letter."}

var inquirer = require('inquirer');
inquirer.prompt([letterGuess]).then(answers => {
	console.log(answers.letterGuessed);
    
});
 
 //display underscore for each letter of the random word
 //compare the user's guess to the array of letter objects
 //if the guess matches, then display matching letter
 //if guess does not match, display underscore
 //update the guess counter