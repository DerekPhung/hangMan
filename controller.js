// (Done) 1st, we need a word
// (Done) 2nd, we need users to be able to start guessing. We need to have an input from users
// (Done) 3rd, if user guesses correctly the letter of the word starts to show
// (Done) 4th, if they guess incorrectly the wrong counter starts counting when they get wrong
// (Done) 5th, the hangman starts to be drawn
// (Done) 6th, if user guesses all letters correctly they will be prompted with a yay!! you got it correct!!
// (Done) 7th, if user runs out of guesses they will be prompted with a sorry, better luck next time!
// (Done) 8th, they will then be prompted if they want to play again

// requirements
// 1. They can only guess letter
// 2. They can only miss 5 times if wrong counter = 6 they lose

// the variable answer, is the word the user has to guess
// the variable guess, is what the user is inputing
// the variable wrongCounter is a counter to count how many guesses they have guessed wrong
// these are global variables so that devs can use them and keep track of them

let wordBank = ["food", "good", "great", "awesome", "amazing", "perfect",
"excellent", "magnificent", "galatic", "ultimate", "exia", "heavyarms", 
"facetiously", "eutopia", "dystopia"];
let answer = "";
let guess = "";
let wrongCounter = 0;
let correctAnswerSoFar = "";

wordSelector();

function wordSelector(){
   let number = Math.floor(Math.random() * wordBank.length);
   answer = wordBank[number];
   dashCreator();
}

function dashCreator(){
    for(let i = 0; i < answer.length; i++){
        document.getElementById("dashList").innerHTML += `<div class="dash" id="dash${i}">-</div>`;
    }
}

// the guess variable becomes what the user puts based on the id "scanner",
// also it is forced to be lower case
function guessing(){
    guess = document.getElementById("scanner").value.toLowerCase();
    // if user already guessed a correct letter, this prevents the user from guessing it twice
    if(correctAnswerSoFar.includes(guess)){
        alert("you already guessed that");
        return;
    }
    showing(guess);

    // if the correct answer user inputs is the same length as the answer's length alert the user
    // informing them that their guesses are correct
    // afterwards it prompts them if they want to play again
    if(correctAnswerSoFar.length == answer.length){
        alertWin();
        // playAgain();
    }
}

// takes in a parameter (user input letter)
// then iterates through the answer
// then if statement checks to see if that letter matches the answer at the specific index[i]
// if it does it changes the dash[i] to the corresponding letter
function showing(letter){
    let foundAnswer = false;
    for(let i = 0; i < answer.length; i++){
        if(letter == answer[i]){
            document.getElementById(`dash${i}`).innerHTML = letter;
            foundAnswer = true;
            correctAnswerSoFar += letter;
        }  
    }
    if(foundAnswer == true){
        return;
    }
    // wrong counter increments when you guess wrong
    wrongCounter++;
    document.getElementById("wrong").innerHTML += `<br>${letter}<br>`;
    // user has 5 guesses to guess the word if wrongCounter == 6 they lose

    // calls the revealHangMan function
    revealHangMan();
}

// function that prompts the user if they would like to play again
function playAgain(){
        location.reload();
}

// function that uses switch statements based on the wrongCounter to call the functions of the specific
// limbs to reveal them one at a time
function revealHangMan(){
    switch(wrongCounter){
        case 1:
            headAppear();
            break;

        case 2:
            bodyAppear();
            break;

        case 3:
            leftArmAppear();
            break;

        case 4:
            rightArmAppear();
            break;

        case 5:
            leftLegAppear();
            break;

        case 6:
            rightLegAppear();
            alertLose();
            // playAgain();
            break;
    }
}

// revealing the man by grouping all of the limbs to the class gone
// the class "gone" hides the man from showing but is technically there
// the functions serve to remove the class "gone" from the limbs in order to reveal them
function headAppear(){
    let head = document.getElementById("head");
    head.classList.remove("gone");
}

function bodyAppear(){
    let body = document.getElementById("body");
    body.classList.remove("gone");
}

function leftArmAppear(){
    let leftArm = document.getElementById("leftArm");
    leftArm.classList.remove("gone");
}

function rightArmAppear(){
    let rightArm = document.getElementById("rightArm");
    rightArm.classList.remove("gone");
}

function leftLegAppear(){
    let leftLeg = document.getElementById("leftLeg");
    leftLeg.classList.remove("gone");
}

function rightLegAppear(){
    let rightLeg = document.getElementById("rightLeg");
    rightLeg.classList.remove("gone");
}

function alertWin(){
    let alertBox = document.getElementById("alertWin");
    alertBox.classList.remove("gone");
}

function alertLose(){
    let alertBox = document.getElementById("alertLose");
    alertBox.classList.remove("gone");
}



function enterKey(){
    let input = document.getElementById("scanner");
    input.addEventListener("keypress", event => {
        if(event.key === "Enter"){
            // event.preventDefault(); not sure what this actually does but it works without it
            document.getElementById("btn").click();
        }
    });
}

enterKey();

// To do list
// bug (Done) fix the pop up shows before the last limb reveals
// bug (Done) fix the pop up shows before the last correct letter is revealed
// (done) the answer is hard coded and needs to have an implementation where it can accept any word
// (done) design suggestion to move the dashes under the hangman
// (done) potentially move the incorrect guesses as well (thinking to the right)
// (done) list of words that can be used for possible answers that will be picked randomly
// (done) deploy webpage to live production
// make it mobile friendly

// Things did on Tuesday
// Bug fixes
// created our own win and lose alerts

// Things to do on wednesday
// clear the input box after guessing
// mobile friendly
// additional styling for the alerts