let userScore = 0, compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice =() =>{
    const opt = ["rock", "paper", "scissors"];
    const randId = Math.floor(Math.random() * 3);
    return opt[randId];
}

const drawGame = () => {
    // console.log("Game  was a draw");
    msg.innerText = "Game was a draw, Play again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You are the winner");
        msg.innerText = `You are the winner Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You loose") 
        msg.innerText = `You Looose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock , scissor
            userWin = compChoice === "scissors" ? false : true; 
        }
        else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})