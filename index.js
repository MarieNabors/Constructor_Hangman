var Word = require("./word.js");

var wordOptions = ["love", "joy", "peace", "patience",
 "kindness", "goodness", "faithfulness",
 "gentleness", "selfcontrol"];
 
 var chosenWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];

 new Word(chosenWord)