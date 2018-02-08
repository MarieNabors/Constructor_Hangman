var Word = require("./word.js");
var inquirer = require('inquirer');
var wordOptions = ["love", "joy", "peace", "patience",
 "kindness", "goodness", "faithfulness",
 "gentleness", "self control"];
 
 var chosenWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];

 var newWord = new Word(chosenWord)
 //console.log(chosenWord);
newWord.splitFunction();


 var letterGuess =  {
 	name: "letterGuessed",
	message: "Guess a letter."}


inquirer.prompt([letterGuess]).then(answers => {
	console.log(answers.letterGuessed);
    
});
 
 //display underscore for each letter of the random word
 //compare the user's guess to the array of letter objects
 //if the guess matches, then display matching letter
 //if guess does not match, display underscore
 //update the guess counter