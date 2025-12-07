let game = document.querySelector("#game-area");
let board = document.querySelector("#board");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#winMsg");
let newBtn = document.querySelector("#newGame");

let winningCondi = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let turn0 = true;
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
            box.style.color = "purple";
        }
        else {
            box.style.color = "red";
            box.innerText = "X";
            turn0 = true;
        }
        console.log(box.innerText);
        isWinner();
        box.style.pointerEvents = "none";
        count++;
        if(count === 9 && msg.innerText === 'msg') {
            msg.classList.remove("hide");
            newBtn.classList.remove("hide");
            msg.innerText = `Game is draw! Play again...`;
        }
    });
});

let isWinner = () => {
    for(let cond of winningCondi) {
        let b1 = boxes[cond[0]];
        let b2 = boxes[cond[1]];
        let b3 = boxes[cond[2]];
        if(b1.innerText !== '' && b2.innerText !== '' && b3.innerText !== '') {
            if(b1.innerText === b2.innerText && b2.innerText === b3.innerText) {
                console.log(`Winner is ${b1.innerText}`);
                endOfGame(b1.innerText);
            }
        }
    }
}

let endOfGame = (winner) => {
    msg.classList.remove("hide");
    newBtn.classList.remove("hide");
    msg.innerText = `Congratulations! Winner is ${winner}`;
    for(let box of boxes) {
        box.style.pointerEvents = "none";
    }
}

newBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.style.pointerEvents = "auto";
    });
    msg.classList.add("hide");
    newBtn.classList.add("hide");
    turn0 = true;
    count = 0;
});

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.style.pointerEvents = "auto";
    });
    msg.classList.add("hide");
    newBtn.classList.add("hide");
    turn0 = true;
    count = 0;
});