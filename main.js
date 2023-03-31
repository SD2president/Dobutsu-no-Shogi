// Global var
var shogiBoard
var testText
let x = 0
let shogiSquare
// this is the function for making the board
function generateBoard(){
    shogiBoard = document.querySelector('#boardGame')
    for (var x = 0; x < 3; x++){
        for(var y= 0; y < 4; y++){
            shogiSquare = document.createElement('div');
            shogiSquare.className = 'shogi-Square';
            shogiSquare.style.backgroundColor = '#121';
            console.log(shogiSquare)
            console.log(shogiBoard)
            shogiBoard.appendChild(shogiSquare);
            return shogiSquare;
        }
        //shogiBoard.appendChild(shogiSquare);
    }
}
document.addEventListener('DOMContentLoaded', generateBoard);

export {shogiBoard};
