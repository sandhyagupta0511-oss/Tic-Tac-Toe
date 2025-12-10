let boxes = document.querySelectorAll('.box');
let reset = document.getElementById('reset');
let newgame = document.getElementById('newgame');
let msgc = document.querySelector('.msgc');
let msg = document.getElementById('msg');

let turn0 = true;

const winpatterns = [
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
    turn0 = true;
    enableboxes();
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; 
        
        checkWinner();
    });
});

const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        msgc.classList.add('hide');
        box.innerText = "";
    });
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgc.classList.remove('hide');
    disableboxes();
}

const checkWinner = () => {
    for(let pattern of winpatterns){
        let pt1 = boxes[pattern[0]].innerText;
        let pt2 = boxes[pattern[1]].innerText;
        let pt3 = boxes[pattern[2]].innerText;

        if(pt1 != "" && pt2 != "" && pt3 != ""){
            if (pt1 === pt2 && pt2 === pt3){
                console.log("Winner", pt1);  
                showWinner(pt1);
            }
        }
    }};

reset.addEventListener('click', resetGame);
newgame.addEventListener('click', resetGame);

