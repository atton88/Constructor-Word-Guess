
// letter constructor function
var Letter = function(char){
    this.char = char;
    this.guessed = false;

    // returns letter if guessed or ___ if not
    this.display = function() {
        if (guessed) {
            return char;
        } else {
            return "___";
        }
    }

    // checks if guess is correct
    this.isChar = function(guess) {
        if (char === guess){
            this.guessed = true;
        }
    }
}

module.export = Letter;