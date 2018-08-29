var Letter = require("letter.js");

// Word constructor function
var Word = function() {
    this.letters = [];

    // function displays the word
    this.displayWord = function() {
        var wordStr = "";
        for (var i = 0; i < this.letters.length; i++){
            wordStr += this.letters[i].display() + " ";
        }
        return wordStr;
    }

    this.createWord = function(str) {
        for (var i = 0; i < str.length; i++){
            var newLetter = new Letter(str);
            letters.push(newLetter);
        }
    }
}

module.export = Word;