/*let lion = {
    image
    
}*/
import { shogiBoard } from "./main";

function newImage(url, name){
    let image = document.createElement('img');
    image.src = url;
    image.id = name;
    image.appendChild(shogiBoard);
}

newImage('./assets/Chick.png', 'chick');
