let rutor = document.getElementsByClassName("ruta");

let player_x = []
let player_o = []

function clickruta(id){
    console.log("id:"+id);
    if ((player_x.length + player_o.length) % 2 == 0){
        if (!player_x.includes(id) && !player_o.includes(id)){
            rutor[id].innerHTML = "X"
            player_x.push(id)
        }     
        console.log(player_x)
    }else{
        if (!player_x.includes(id) && !player_o.includes(id)){
            rutor[id].innerHTML = "O"
            player_o.push(id)
        }
        console.log(player_o)
    }
}

function CheckTheWin(){
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]
}

























let rutor = document.getElementsByClassName("ruta");
let player_x = [];
let player_o = [];

function clickruta(id) {
    // Kolla så att rutan inte redan är använd
    if (rutor[id].innerHTML !== "") return;

    if ((player_x.length + player_o.length) % 2 === 0) {
        rutor[id].innerHTML = "X";
        player_x.push(id);
    } else {
        rutor[id].innerHTML = "O";
        player_o.push(id);
    }

    CheckTheWin();
}

function CheckTheWin() {
    const vinnandeKombinationer = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rader
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // kolumner
        [0, 4, 8], [2, 4, 6]             // diagonaler
    ];

    for (let komb of vinnandeKombinationer) {
        if (komb.every(id => player_x.includes(id))) {
            alert("Spelare X vinner!");
            disableAll();
            return;
        }
        if (komb.every(id => player_o.includes(id))) {
            alert("Spelare O vinner!");
            disableAll();
            return;
        }
    }

    // Kolla om det blev oavgjort
    if ((player_x.length + player_o.length) === 9) {
        alert("Oavgjort!");
    }
}

function disableAll() {
    for (let i = 0; i < rutor.length; i++) {
        rutor[i].onclick = null;
    }
}