// Global var
var shogiBoard
var testText
let shogiSquare
let assets = [
    {
        src:'./assets/Chick.png',
        name: "Chick",
        startPosition: {
            P1: "b2",
            P2: "b3",
        }
    },
    {
        src:'./assets/Elephant.png',
        name: "Elephant",
        startPosition: {
            P1: "a1",
            P2: "a4",
        }
    },
    {
        src:'./assets/Giraffe.png',
        name: "Giraffe",
        startPosition: {
            P1: "c1",
            P2: "c4",
        }
    },
    {
        src:'./assets/Lion.png',
        name: "Lion",
        startPosition: {
            P1: "b1",
            P2: "b4",
        }
    },

]
// this is the function for making the board

function newImage(container,url, name,player){
    let image = document.createElement('img');
    image.src = url;
    image.id = name;
    if (player === "P1"){
        image.style.transform = "rotate(180deg)"
    }

    container.appendChild(image);
}


function generateBoard(){
    shogiBoard = document.querySelector('#boardGame')
    let column = ["a","b","c"]
    for(var y= 0; y < 4; y++){
        for (var x = 0; x < 3; x++){
            let currentAddress = column[x] + (y+1);
            shogiSquare = document.createElement('div');
            shogiSquare.className = 'shogi-Square';
            shogiSquare.id = currentAddress;
            shogiSquare.style.backgroundColor = '#121';
            console.log(shogiSquare)
            console.log(shogiBoard)
            shogiBoard.appendChild(shogiSquare);
            debugger;
            let currentPlayer = y <= 1 ? "P1":"P2";
            let currentImg = assets.find(asset => {
                let {startPosition} = asset
                return startPosition[currentPlayer] === currentAddress
            })
            if (!currentImg){
                continue;
            }
            newImage(shogiSquare, currentImg.src, currentImg.name, currentPlayer)
        }
        
    }
   
}
document.addEventListener('DOMContentLoaded', generateBoard);
 

