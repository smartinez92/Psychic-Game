

// Creating Array for computer guesses.
var computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Here is the variables for wins, losses, guesses left and guesses so far.
var wins = 0;
var loss = 0;
var guessesLeft = 9;
var guessesSoFar = "";

//--------------------------------------------------- Variables for different sounds. ------------------------------------------------------------
var wSnd = new Audio( "assets/javascript/smw_coin.wav");
var loseSound = new Audio( "assets/javascript/smw_lemmy_wendy_incorrect.wav");
var guessSound = new Audio( "assets/javascript/smw_kick.wav");
//------------------------------------------------------------------------------------------------------------------------------------------------

// Here is computer picking a random letter.
var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// On key up for user input.
document.onkeyup = function(event) {

  var userGuess = event.key;
  
// For loop to check through the letters to make sure it does not record input from any other key press. For example ENTER or SPACE key.
 for( var i = 0; i < computerChoices.length; i++){

    // If condition to save the users guesses.
    if( event.key == computerChoices[i] ){

        guessesSoFar += userGuess + ", ";

        // If condition for when the user correctly guesses the computers letter. Wins goes up 1. Plays sound. Resets guesses and computer picks another letter.
        if( userGuess == computerPick ){

            wins++;
            wSnd.play();
            guessesLeft = 9;
            computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guessesSoFar = "";
        
          // Else if condition for when the users guess does not guess the letter correctly. Guesses go down 1. Plays sound.
          }else if( userGuess !== computerPick ){
        
            guessesLeft--;
            guessSound.play();
        
          }
        
          // When the user runs out of guesses they will get a loss. Loss goes up 1. Plays sound. Resets guesses and computer picks another letter.
          if( guessesLeft == 0 ){
        
            loss++;
            loseSound.play();
            guessesLeft = 9;
            computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guessesSoFar = "";
        
          }
         
            // To display the information on the page.
            var html = 
        
                  "<p>Wins: " + wins + "</p>" +
                  "<p>Losses: " + loss + "</p>" +
                  "<p>Guesses Left: " + guessesLeft + "</p>" +
                  "<p>Your Guesses So Far: " + guessesSoFar + "</p>";
        
        
            var div = document.getElementById("game");
            div.innerHTML = html;

            break;
    }

}

}


