var Letter = require("./letter.js");

// Word constructor function
var Word = function(str) {

    // create letter object array
    this.letters = [];
    for (var i = 0; i < str.length; i++){
        var newLetter = new Letter(str[i]);
        this.letters.push(newLetter);
    }

    // function displays the word
    this.toString = function() {
        var wordStr = " ";
        for (var i = 0; i < this.letters.length; i++){
            wordStr += this.letters[i].display() + "  ";
        }
        return wordStr;
    }

    // function guesses the letter against the letter objects
    this.guessLetter = function(c) {
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i].isChar(c);
        }
    }

    this.isSolved = function() {
        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].guessed) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Word;