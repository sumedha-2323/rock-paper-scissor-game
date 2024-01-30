let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userscore = document.querySelector('#user-score');
const compscore = document.querySelector('#comp-score');





const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    //console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";

}


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
        userScore++;
        userscore.innerText = userScore;
        //console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compscore.innerText = compScore;
        //console.log("You lose");
        msg.innerText =  `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}




const playGame = (userChoice) =>{
    console.log("user Choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
});