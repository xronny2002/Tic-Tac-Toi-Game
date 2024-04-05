let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-Btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; // turn for X and O

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5], 
  [6, 7, 8],
];

const resetGame = () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    
    if (turnO) { 
      box.innerText = '0';
      turnO = false;
    } else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableBoxes = () =>{
    for (let box of boxes ){
        box.disabled=true;
    }
    };

    const enableBoxes = () =>{
        for (let box of boxes ){
            box.disabled=false;
            box.innerText= '';
        }
        };


const showWinner = (winner) => {
  msg.innerText = `congrats, winner is ${winner}`;
  msgContainer.classList.remove('hide');
  disableBoxes();
};


const checkWinner = () => {
  for (let pattern of winPatterns) {
    const post1Val = boxes[pattern[0]].innerText;
    const post2Val = boxes[pattern[1]].innerText;
    const post3Val = boxes[pattern[2]].innerText;
    if (post1Val!== '' && post2Val!== '' && post3Val!== '') {
      if (post1Val === post2Val && post1Val === post3Val) {
       

        showWinner(post1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


