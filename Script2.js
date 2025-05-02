let rutor = document.getElementsByClassName("ruta");

let player_x = []
let player_o = []

function clickruta(id){
    console.log(id);
    if ((player_x.length + player_o.length) % 2 == 0){
        rutor[id].innerHTML = "X"
        player_x.push(id)
        console.log(player_x)
    }else{
        rutor[id].innerHTML = "O"
        player_o.push(id)
        console.log(player_o)
    }
   
}





