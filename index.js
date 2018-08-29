var Word = require("./word.js");
var inquirer = require("inquirer");

var pokemonList = new Array("Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetchd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew");
var poke;
var lettersGuessed = [];

startGame();


// Begin game function, chooses random pokemon and creates words and letters
function startGame() {
    lettersGuessed = [];
    var randomPoke = Math.floor(Math.random() * pokemonList.length);
    randomPoke = pokemonList[randomPoke].toUpperCase();
    console.log(randomPoke);

    poke = new Word(randomPoke);
    console.log("----------------------------\n Game Start!!");
    console.log("----------------------------\n");

    console.log("\n" + poke.toString() + "\n");
    playGame();
}

function playGame() {
    console.log("----------------------------\n");
    inquirer.prompt([{
        type: "input",
        message: "Guess a letter!",
        name: "guess",
        validate: function(guess) {
            if (guess.length === 1 && isNaN(parseFloat(guess))){
                return !lettersGuessed.includes(guess.toUpperCase());
            } else {
                return false;
            }
        }
    }]). then (function(answer) {
        var guess = answer.guess.toUpperCase();
        lettersGuessed.push(guess);
        poke.guessLetter(guess);
        console.log("\n" + poke.toString() + "\n");
        playGame();
    })

    
}








//LETTER TEST
// var Letter = require("./letter.js")

// var testLetter = new Letter("m");
// console.log(testLetter.char);
// console.log(testLetter.guessed);
// testLetter.display();
// testLetter.isChar("a");

// console.log(testLetter.char)
// console.log(testLetter.guessed)

// testLetter.isChar("m");

// console.log(testLetter.char)
// console.log(testLetter.guessed)
// testLetter.display();


//word test
// poke.createWord("test");


// console.log(poke.displayWord());
// console.log(poke.letters);

// poke.letters[0].isChar("t");


// console.log(poke.displayWord());
// console.log(poke.letters);