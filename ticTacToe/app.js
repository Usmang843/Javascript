let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let countVal = 0; 
let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    countVal = 0;
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }
        box.disabled = true;
        countVal++;

        let isWinner = checkWinner();

        if( countVal === 9 && !isWinner){
            gameDraw();
        }


    })
})

const gameDraw = () =>{
    msg.innerText = "Game was a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
} 

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x","o")
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPattern){
        let post1  = boxes[pattern[0]].innerText;
        let post2  = boxes[pattern[1]].innerText;
        let post3  = boxes[pattern[2]].innerText;

        if(post1 != "" && post2 != "" &&  post3 != ""){
            if(post1 === post2 && post2 === post3){
                showWinner(post1);
                return true;
            }
        }
    }
    return false;
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);