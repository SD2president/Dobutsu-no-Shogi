// Global var
var shogiBoard 

// this is the function for making the board
function generateBoard(){
    shogiBoard = document.querySelector('#boardGame')
    for (var x = 0; x < 3; x++){
        for(var y= 0; y < 4; y++){
            let shogiSquare = document.createElement('div');
            shogiSquare.className = 'shogi-Square';
            shogiSquare.style.backgroundColor = '#121';
            console.log(shogiSquare)
            console.log(shogiBoard)
            shogiBoard.appendChild(shogiSquare);
        }
        //shogiBoard.appendChild(shogiSquare);
    }
}
document.addEventListener('DOMContentLoaded', generateBoard)
