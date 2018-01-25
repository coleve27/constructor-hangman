//NPM packages
var inquirer = require('inquirer');
//import other files
var Letter = require("./letter.js");
var wordConstructor = require("./word.js");
var game = require("./game.js");
var wordLength = game.wordToGuess.wordBank.length;
var RandNum = Math.floor(Math.random() * wordLength);
var Word = game.wordToGuess.wordBank[RandNum];
var newWord;

// array in which we will store each of our new programmer objects
var guessedLetters = [];

hangman();

function hangman() {
  // if statement to ensure that our questions are only asked 11 times
  if (guessedLetters.length < 10) {
    console.log("Let's Play Hangman");
    console.log('*****************');
    newWord = new wordConstructor(Word);
    newWord.getLets();
    console.log(newWord.wordRender());
    keepPromptingUser();
  } else {
    guessedLetters = [];
    hangman();
  }
}

function keepPromptingUser() {
  inquirer.prompt([{
    name: "chosenLtr",
    type: "input",
    message: "Choose a letter:"
  }]).then(function(ltr) {
    var letterReturned = (ltr.chosenLtr).toUpperCase();
    var guessedAlready = false;
    for (var i = 0; i < guessedLetters.length; i++) {
      if (letterReturned === guessedLetters[i]) {
        guessedAlready = true;
      }
    }
    if (guessedAlready === false) {
      guessedLetters.push(letterReturned);

      var found = newWord.checkIfLetterFound(letterReturned);

      if (found === 0) {
        console.log("wrong! Sad");

      } else {
        console.log("correct!");
        if (newWord.didWeFindTheWord() === true) {
          console.log("you've won!");
          hangman();
        } else {
          console.log(newWord.wordRender());
        }
      }
      if (guessedLetters.length < 10) {
        keepPromptingUser();
      } else {
        hangman();
      }

    } else {
      console.log("keep track of what letter you picked!");
      keepPromptingUser();
    }
  })
};
