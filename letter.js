
// letter constructor function
var Letter = function(char){
    this.char = char;
    this.guessed = false;

    // returns letter if guessed or ___ if not
    this.display = function() {
        if (this.guessed) {
            return this.char;
        } else {
            return "_";
        }
    }

    // checks if guess is correct
    this.isChar = function(guess) {
        if (this.char === guess){
            this.guessed = true;
        }
    }
}

module.exports = Letter;