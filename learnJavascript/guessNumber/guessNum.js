const rndNum = parseInt(Math.random() * 100 + 1);

const submt = document.querySelector("#guessNum");
const usrInp = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remain = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".results");


const p = document.createElement("p");

let prevGuess = [],
  numGuesses = 1,
  playGame = true;
if(playGame){
    submt.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(usrInp.value);
        validGuess(guess)
    });
}
function validGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number more than 1')

    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess);
        if(numGuesses === 10){
            displayGuess(guess)
            display(`Game Over, Random Number was ${rndNum}`)
            endGame();
        }
        else{
            displayGuess(guess)
            chkNum(guess)
        }
    }
}
function chkNum(guess) {
    if(guess === rndNum){
        display(`Your Guessed number is right`);
        endGame()
    }
    else if(guess < rndNum){
        display(`Your Guessed number is Too Low`);
    }
    else if(guess > rndNum){
        display(`Your Guessed number is Too High`);
    }
}
function displayGuess(guess) {
    usrInp.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses++
    remain.innerHTML = `${11-numGuesses}`
}
function display(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    usrInp.value = ''
    usrInp.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = 'false'
    newGame()
}
function newGame() {

}
