//Theme is Top Gun
// create game object that contains words to be guessed, letters already guessed, wins, number of guesses remaining. 
var hangman = {
    wins: 0,
    losses: 0,
    pilotNames: ["Maverick", "Goose", "Iceman", "Hollywood", "Cougar", "Sunshine", "Viper", "Jester"] ,// user to guess pilot name
    guessesRemaining: 3,
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
    hangman.guessesRemaining = 3;
    hangman.lettersGuessed = [];
    //write out document.getElementById statements
    pilotProgress = [];
    randPilot();
    for (var i = 0; i < hangman.guessPilot.length; i ++) //pushes "-" for the length of the pilot name
        pilotProgress.push('-').toLowerCase;

    document.getElementById("pilot").innerText = `Pilot: ${pilotProgress.join(" ")}`
    document.getElementById("wins").innerText = `Wins: ${hangman.wins}` ;
    document.getElementById("losses").innerText = `Losses: ${hangman.losses}` ;
    document.getElementById("guessesRemaining").innerText = `Guesses Remaining: ${hangman.guessesRemaining}` ;
    document.getElementById("lettersGuessed").innerText = `Your Guesses: ${hangman.lettersGuessed.join(" ").toUpperCase()}` ;
    
}

// function pilotLoop() {
//     for (var i = 0; i < pilotLength; i ++) //pushes "-" for the length of the pilot name
//         pilotProgress.push('-'); 


// Incorrect letter function

// Game win function

// Game lose function
start()

// var pilotLength = hangman.guessPilot.length //sets the length of the Pilot name

// for (var i = 0; i < pilotLength; i ++) //pushes "-" for the length of the pilot name
//         pilotProgress.push('-').toLowerCase;

// document.getElementById("pilot").innerText = `Pilot: ${pilotProgress}`

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

    var correctGuess = false
    

// if (hangman.guessPilot.indexOf(userKey.toLowerCase()) !== -1){ // if the character is found
    for (var i = 0; i < hangman.guessPilot.length; i ++){ // loop on all characters
        console.log(hangman.guessPilot[i], userKey)
        if (hangman.guessPilot[i].toLowerCase() === userKey){// if this is an occurance. keyString == userKey?
            pilotProgress[i] = hangman.guessPilot[i];
            correctGuess = true;
        }
    }
    
    if (correctGuess){
        if (pilotProgress.join("") === hangman.guessPilot){
            alert("You win")
            hangman.wins++
            start()
        }

    }
    else {
        hangman.guessesRemaining--
        if (hangman.guessesRemaining < 1){
        alert("Game Over")
        hangman.losses++
        start()
        }
    }

document.getElementById("pilot").innerText = `Pilot: ${pilotProgress.join(" ")}`
document.getElementById("lettersGuessed").innerText = `Your Guesses: ${hangman.lettersGuessed.join(" ").toUpperCase()}` ;
document.getElementById("guessesRemaining").innerText = `Guesses Remaining: ${hangman.guessesRemaining}` ;

}
