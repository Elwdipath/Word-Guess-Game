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
    document.getElementById("wins").innerText = `Wins: ${hangman.wins}` ;
    document.getElementById("losses").innerText = `Losses: ${hangman.losses}` ;
    document.getElementById("guessesRemaining").innerText = `Guesses Remaining: ${hangman.guessesRemaining}` ;
    // document.getElementById("lettersGuessed").innerText = `Your Guesses: ${hangman.guesses.join(" ").toUpperCase()}` ;
    randPilot();
    
}



// Incorrect letter function

// Game win function

// Game lose function
start()

var pilotLength = hangman.guessPilot.length //sets the length of the Pilot name

for (var i = 0; i < pilotLength; i ++) //pushes "-" for the length of the pilot name
        pilotProgress.push('-'); 

// Create event key that does the following: Adds key to an array, checks if letter pressed is contained in the string that was randomly selected from an array. 
document.onkeyup = function(event) {
    var userKey = event.key.toLowerCase();

    //validate user uses a valid key
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        //validate user hasn't already guessed that key. 
         if (hangman.lettersGuessed.includes(userKey)) {
         alert("Already guessed");
         return; 
        }
        hangman.lettersGuessed.push(userKey); //push userKey to hangman.lettersGuessed
    }
    
    else {
        alert("Invalid character")
        
        return; 
     }

  



if (hangman.guessPilot.indexOf(hangman.guessPilot) != -1){ // if the character is found
    for (var i = 0; i < hangman.guessPilot.length; i ++){ // loop on all characters
        if (hangman.guessPilot[i] == userKey) // if this is an occurance. keyString == userKey?
            pilotProgress[i] = hangman.guessPilot[i];
        }
    }
    // else
    // wrong choice





}
