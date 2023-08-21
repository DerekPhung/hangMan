// (Done) 1st, we need a word
// (Done) 2nd, we need users to be able to start guessing. We need to have an input from users
// (Done) 3rd, if user guesses correctly the letter of the word starts to show
// (Done) 4th, if they guess incorrectly the wrong counter starts counting when they get wrong
// 5th, the hangman starts to be drawn
// 6th, if user guesses all letters correctly they will be prompted with a yay!! you got it correct!!
// (Done) 7th, if user runs out of guesses they will be prompted with a sorry, better luck next time!
// 8th, they will then be prompted if they want to play again

// requirements
// 1. They can only guess letter
// 2. They can only miss 5 times if wrong counter = 6 they lose

// the variable answer, is the word the user has to guess
// the variable guess, is what the user is inputing
// the variable wrongCounter is a counter to count how many guesses they have guessed wrong
// these are global variables so that devs can use them and keep track of them
let answer = "word";
let guess = "";
let wrongCounter = 0;

// the guess variable becomes what the user puts based on the id "scanner",
// also it is forced to be lower case
function guessing(){
    guess = document.getElementById("scanner").value.toLowerCase();
    showing(guess);
}

// takes in a parameter (user input letter)
// then iterates through the answer
// then if statement checks to see if that letter matches the answer at the specific index[i]
// if it does it changes the dash[i] to the corresponding letter
function showing(letter){
    for(let i = 0; i < answer.length; i++){
        if(letter == answer[i]){
            document.getElementById(`dash${i}`).innerHTML = letter;
            return;
        }  
    }

    // wrong counter increments when you guess wrong
    // line 46 letting user know that their imminent doom is coming
    // the DOM id "wrong" is appending the incorrect guesses area based on user input that is wrong 
    alert(letter + " is not correct");
    wrongCounter++;
    alert(wrongCounter + " This is the wrong counter");
    document.getElementById("wrong").innerHTML += letter;
    // user has 5 guesses to guess the word if wrongCounter == 6 they lose
    if(wrongCounter == 6){
        alert("You lose, better luck next time");
    }
}

document.getElementById("1").innerHTML  += `
<input id="scanner" type="text" minlength="1" maxlength="1"/>
<button onclick="guessing()">Guess</button>

<div class="dash" id="dash0">-</div>
<div class="dash" id="dash1">-</div>
<div class="dash" id="dash2">-</div>
<div class="dash" id="dash3">-</div><br><br>

<h3>Incorrect Guesses</h1>
<div class="dash" id="wrong"></div>
`;

// Things I have done on Monday
// implemented a display for incorrect guesses
// drew a man

// Things to do on Tuesday
// Draw a hang
// Hide the man
// When user guesses wrong, slowly reveal the man

