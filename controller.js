// 1st, we need a word
// 2nd, we need users to be able to start guessing. We need to have an input from users
// 3rd, if user guesses correctly the letter of the word starts to show
// 4th, if they guess incorrectly the wrong counter starts counting when they get wrong
// 5th, the hangman starts to be drawn
// 6th, if user guesses all letters correctly they will be prompted with a yay!! you got it correct!!
// 7th, if user runs out of guesses they will be prompted with a sorry, better luck next time!
// 8th, they will then be prompted if they want to play again

// requirements
// 1. They can only guess letter
// 2. They can only miss 5 times if wrong counter = 6 they lose

let answer = "word";
let guess = "";
let wrongCounter = 0;

function guessing(){
    guess = guess + document.getElementById("scanner").value.toLowerCase();
   alert(guess);
   document.getElementById("dash3").innerHTML = guess;
}

document.getElementById("1").innerHTML  += `
<input id="scanner" type="text" minlength="1" maxlength="1"/>
<button onclick="guessing()">Guess</button>

<div class="dash" id="dash1">-</div>
<div class="dash" id="dash2">-</div>
<div class="dash" id="dash3">-</div>
<div class="dash" id="dash4">-</div>
`;

// reminder for tmr for my future self
// still mutating the string!!!!
// 3rd action item
// working on the guessing function which is the only function why am I guessing which function when there is only one function >=O
