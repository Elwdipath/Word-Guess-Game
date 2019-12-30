//Theme is Top Gun
// create game object that contains words to be guessed, letters already guessed, wins, number of guesses remaining. 
var hangman = {
    wins: 0,
    losses: 0,
    pilotNames: ["Maverick", "Goose", "Iceman", "Hollywood", "Cougar", "Sunshine", "Viper", "Jester"] ,// user to guess pilot name
    guessesRemaining: 12,
    lettersGuessed: [],
    guessPilot: "",
}

// choose random pilot name
function randPilot () {
    hangman.guessPilot = hangman.pilotNames[Math.floor(Math.random() * hangman.pilotNames.length)];
}

var pilotProgress = [];
//start game

function start() {
    hangman.guessesRemaining = 12;
    hangman.lettersGuessed = [];
    //write out document.getElementById statements
    randPilot();
    for (var i = 0; i < hangman.pilotLength; i ++)
        pilotProgress.push('-');
}

start()

// Incorrect letter function

// Game win function

// Game lose function

// Create event key that does the following: Adds key to an array, checks if letter pressed is contained in the string that was randomly selected from an array. 