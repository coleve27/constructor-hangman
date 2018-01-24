//NPM packages
//import other files

var game = require("./game.js");
var wordLength = game.wordToGuess.wordBank.length ;
var RandNum = Math.floor(Math.random() * wordLength);

console.log(game.wordToGuess.wordBank[RandNum]);



console.log(RandNum);
