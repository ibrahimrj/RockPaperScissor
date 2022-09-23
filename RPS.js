const playerscore = document.querySelector('#PS');
const opponentscore = document.querySelector('#OS');
const button = document.querySelectorAll('button');
const choices = document.querySelector('#CS');
const rock = document.querySelector("#rockbtn");
const paper = document.querySelector("#paperbtn");
const scissor = document.querySelector("#scissorbtn");
const result = document.querySelector("#result");
const games = document.querySelector("#upTo")

let Ps = 0;
let Os = 0;
let gameOver = false;
let upTo = 5;



function OPC() {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}






function game(Playerselection, Opponentselection) {
    Opponentselection = OPC();
    results = "";

    if (!gameOver) {
        if ((Playerselection === "Scissors" && Opponentselection === "Paper") ||
            (Playerselection === "Rock" && Opponentselection === "Scissors") ||
            (Playerselection === "Paper" && Opponentselection === "Rock")) {
            results = `You win Woooo ${Playerselection} beats ${Opponentselection}!!!`;
            result.textContent = results
            Ps += 1;
            playerscore.textContent = `Player Score: ${Ps}`;
        } else if ((Playerselection === "Paper" && Opponentselection === "Scissors") ||
            (Playerselection === "Scissors" && Opponentselection === "Rock") ||
            (Playerselection === "Rock" && Opponentselection === "Paper")) {
            results = `Agggghh You lose ${Opponentselection} beats ${Playerselection} better luck next time!!`;
            result.textContent = results;
            Os += 1;
            opponentscore.textContent = `Opponent Score: ${Os}`;
        } else {
            results = "It's a  tie!! Go again";
            result.textContent = results
        }
    } if (Ps === upTo) {
        results = "CONGRATS YOU WON!!";
        result.textContent = results;
        gameOver = true;

    } else if (Os === upTo) {
        results = "Better luck next time :( ";
        result.textContent = results;
        gameOver = true;
    }
}

button.forEach(button => {
    button.addEventListener("click", function () {
        game(button.value)
    })
})

games.addEventListener("change", () => {
    upTo = parseInt(games.value);
    resets();
})

function resets() {
    Ps = 0;
    Os = 0;
    playerscore.textContent = `Player Score: ${Ps}`;
    opponentscore.textContent = `Opponent Score: ${Os}`;
    gameOver = false;
    result.textContent = ":"
}