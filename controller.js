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
    guess = document.getElementById("scanner").value.toLowerCase();
//    alert(answer[1]);
//    document.getElementById("dash0").innerHTML = guess;
//    document.getElementById("dash1").innerHTML = guess;
//    document.getElementById("dash2").innerHTML = guess;
//    document.getElementById("dash3").innerHTML = guess;

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

        alert(letter + " is not correct");
        wrongCounter++;
        alert(wrongCounter);
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
<div class="dash" id="dash3">-</div>
`;

// Things I have done on Friday
// Created the showing function
// user can now guess the letter and will show if guessed correctly
// made wrongCounter working
// if user guesses incorrectly too many times you lose (at least verbally via alert method)

// things to do on Monday
// display the incorrect guesses somewhere on the screen for the user
// draw the actual hang man

